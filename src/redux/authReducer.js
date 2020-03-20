import {SET_AUTH_DATA} from "./actionTypes";
import {authAPI} from "../api/api";

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuthorized: true,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                isAuthorized: true
            }

        default:
            return state
    }
}

export const setAuthData = (userId, login, email) => (
    {type: SET_AUTH_DATA, data: {userId, login, email}}
)

export const getAuthData = () => {
    return (dispatch) => {
        authAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(setAuthData(id, login, email))
                }
            })
    }
}

export const login = (dataInput) => {
    return (dispatch) => {
        authAPI.login(dataInput)
            .then(data => {
                if (data.resultCode === 0) {
                    getAuthData()(dispatch)
                }
            })
    }
}