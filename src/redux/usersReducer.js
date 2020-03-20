import {
    FOLLOW,
    SET_CURRENT_PAGE,
    SET_TOTAL_USER_COUNT,
    SET_USERS,
    TOGGLE_FOLLOWING_IN_PROGRESS,
    TOGGLE_IS_LOADING,
    UNFOLLOW
} from "./actionTypes";
import {usersAPI} from "../api/api";

const initialState = {
    users: [],
    pageSize: 100,
    totalUserCount: 0,
    currentPage: 1,
    isLoading: false,
    followingInProgress: []
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.id) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.id) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }

        case SET_USERS:
            return {
                ...state,
                users: action.users
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }

        case SET_TOTAL_USER_COUNT:
            return {
                ...state,
                totalUserCount: action.totalUserCount
            }

        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }

        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [state.followingInProgress.filter(id => id !== action.userId)]
            }

        default:
            return state
    }
}

export const followSuccess = (id) => ({
    type: FOLLOW, id
})

export const unFollowSuccess = (id) => ({
    type: UNFOLLOW, id
})

export const setUsers = (users) => ({
    type: SET_USERS, users
})

export const setCurrentPage = (page) => ({
    type: SET_CURRENT_PAGE, currentPage: page
})

export const setTotalUserCount = (totalUserCount) => ({
    type: SET_TOTAL_USER_COUNT, totalUserCount
})

export const toggleIsLoading = (isLoading) => ({
    type: TOGGLE_IS_LOADING, isLoading
})

export const toggleFollowingInProgress = (isFetching, userId) => ({
    type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userId
})

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setCurrentPage(currentPage))
        dispatch(toggleIsLoading(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                    dispatch(toggleIsLoading(false))
                    dispatch(setUsers(data.items))
                    dispatch(setTotalUserCount(data.totalCount))
                }
            )
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId))
        usersAPI.follow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(toggleFollowingInProgress(false, userId))
                dispatch(followSuccess(userId))
            }
        })
    }
}

export const unFollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId))
        usersAPI.unFollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(toggleFollowingInProgress(false, userId))
                dispatch(unFollowSuccess(userId))
            }
        })
    }
}