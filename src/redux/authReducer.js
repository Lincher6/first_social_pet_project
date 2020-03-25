import {SET_AUTH_DATA, SET_USER_DATA} from "./actionTypes";
import {authAPI, profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const initialState = {
    userId: null,
    login: null,
    email: null,
    likes: 123,
    userData: {},
    isAuthorized: false,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data,
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

export const setUserData = (data, isAuthorized) => (
    {type: SET_USER_DATA, data, isAuthorized}
)

export const getAuthData = () => (dispatch) => {
    return authAPI.authMe()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setAuthData(id, login, email))
                return dispatch(setUserDataThunk(id))
            }
        })
}

export const setUserDataThunk = (userId) => (dispatch) => {
    return profileAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserData(data, true))
        })
}

export const login = (dataInput) => {
    return (dispatch) => {
        authAPI.login(dataInput)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(getAuthData())
                } else {
                    const message = data.messages.length > 0 ? data.messages[0] : 'Неверный логин или пароль'
                    dispatch(stopSubmit('login', {_error: message}))
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
