import {SET_AUTH_DATA, SET_AUTH_ERROR, SET_USER_DATA, TOGGLE_IS_LOADING} from "./actionTypes";
import {authAPI, profileAPI} from "../api/api";
import {setProfile} from "./profileReducer";

const initialState = {
    userId: null,
    login: null,
    email: null,
    likes: 123,
    userData: null,
    isAuthorized: false,
    isLoading: false,
    authError: false
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
                userData: action.data,
                isAuthorized: action.isAuthorized
            }

        case SET_AUTH_ERROR:
            return {
                ...state,
                authError: action.error
            }

        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
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

export const setAuthError = (error) => (
    {type: SET_AUTH_ERROR, error}
)

export const toggleIsLoading = (payload) => (
    {type: TOGGLE_IS_LOADING, payload}
)

export const getAuthData = () => async dispatch => {
    const data = await authAPI.authMe()
    if (data.resultCode === 0) {
        let {id, login, email} = data.data
        dispatch(setAuthData(id, login, email))
        return dispatch(setUserDataThunk(id))
    }
}

export const setUserDataThunk = (userId) => async dispatch => {
    const data = await profileAPI.getProfile(userId)
    dispatch(setUserData(data, true))
    dispatch(setProfile(data))
    return data
}

export const login = (dataInput) => async dispatch => {
    const data = await authAPI.login(dataInput)
    if (data.resultCode === 0) {
        dispatch(getAuthData())
    } else {
        const message = data.messages.length > 0 ? data.messages[0] : 'Неверный логин или пароль'
        dispatch(setAuthError(true))
    }
}

export const logout = () => async dispatch => {
    const data = await authAPI.logout()
    if (data.resultCode === 0) {
        dispatch(setAuthData(null, null, null))
        dispatch(setUserData({}, false))
    }
}
