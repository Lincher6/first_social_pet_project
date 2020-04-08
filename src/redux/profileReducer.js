import {
    ADD_POST,
    SET_CURRENT_PROFILE_ID,
    SET_PROFILE,
    SET_PROFILE_STATUS,
    TOGGLE_IS_LOADING,
} from "./actionTypes";
import {profileAPI} from "../api/api";


let initialState = {
    profile: null,
    currentProfileId: null,
    isLoading: false,
    profileStatus: null,
    posts: [
        {id: 1, postText: 'Hi, how are you?', likes: 5},
        {id: 2, postText: 'It\'s my first post', likes: 13},
        {id: 3, postText: 'Now second', likes: 22},
        {id: 4, postText: 'And final', likes: 1},
    ]
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                postText: action.newPostText,
                likes: Math.round(Math.random() * 100)
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            }

        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        case SET_CURRENT_PROFILE_ID:
            return {
                ...state,
                currentProfileId: action.currentProfileId,
            }

        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }

        case SET_PROFILE_STATUS:
            return {
                ...state,
                profileStatus: action.profileStatus
            }


        default:
            return state
    }
}

export const addPost = (newPostText) => (
    {type: ADD_POST, newPostText}
)

export const setProfile = profile => (
    {type: SET_PROFILE, profile}
)

export const setProfileStatusAction = profileStatus => (
    {type: SET_PROFILE_STATUS, profileStatus}
)

export const setCurrentProfileId = currentProfileId => (
    {type: SET_CURRENT_PROFILE_ID, currentProfileId}
)

export const toggleIsLoading = (isLoading) => ({
    type: TOGGLE_IS_LOADING, isLoading
})

export const getProfile = (userId) => async dispatch => {
    dispatch(toggleIsLoading(true))
    const data = await profileAPI.getProfile(userId)
    const status = await profileAPI.getStatus(userId)
    dispatch(setProfileStatusAction(status))
    dispatch(setProfile(data))
    dispatch(setCurrentProfileId(userId))
    dispatch(toggleIsLoading(false))
}

export const getProfileStatus = (userId) => async dispatch => {
    const data = await profileAPI.getStatus(userId)
    dispatch(setProfileStatusAction(data))
}

export const setProfileStatus = (status) => async dispatch => {
    const data = profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setProfileStatusAction(status))
    }
}

export const updateProfileInfo = (profileId, profileData) => async dispatch => {
    const data = await profileAPI.updateProfileInfo(profileData)
}