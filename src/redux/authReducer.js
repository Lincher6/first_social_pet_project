import {SET_AUTH_DATA, SET_AUTH_ERROR, SET_USER_DATA} from "./actionTypes";
import {authAPI, profileAPI} from "../api/api";
import {setCurrentProfileId, setProfile, toggleIsLoading} from "./profileReducer";

const initialState = {
    userId: null,
    login: null,
    email: null,
    likes: 123,
    userData: {},
    isAuthorized: false,
    authError: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data,
            }

        case SET_AUTH_ERROR:
            return {
                ...state,
                authError: action.authError
            }

        case SET_USER_DATA:
            return {
                ...state,
                userData: {...action.data},
                isAuthorized: action.isAuthorized
            }

        default:
            return state
    }
}

export const setAuthData = (userId, login, email) => (
    {type: SET_AUTH_DATA, data: {userId, login, email}}
)

export const setAuthError = (authError) => (
    {type: SET_AUTH_ERROR, authError}
)

export const setUserData = (data, isAuthorized) => (
    {type: SET_USER_DATA, data, isAuthorized}
)

export const getAuthData = () => {
    return (dispatch) => {
        authAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(setAuthData(id, login, email, true))
                    dispatch(setUserDataThunk(id))
                }
            })
    }
}

export const login = (dataInput) => {
    return (dispatch) => {
        authAPI.login(dataInput)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(getAuthData())
                } else {
                    dispatch(setAuthError(true))
                }
            })
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthData(null, null, null))
                    dispatch(setUserData({}, false))
                }
            })
    }
}

export const setUserDataThunk = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserData(data, true))
            })
    }
}
