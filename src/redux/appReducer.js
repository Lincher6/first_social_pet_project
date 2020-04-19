import {SET_IS_INITIALIZED, SET_NEW_MESSAGE_COUNT} from "./actionTypes";
import {getAuthData} from "./authReducer";
import {dialogsAPI} from "../api/api";


const initialState = {
    isInitialized: false,
    newMessageCount: 0
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_INITIALIZED:
            return {
                ...state,
                isInitialized: action.payload,
            }

        case SET_NEW_MESSAGE_COUNT:
            return {
                ...state,
                newMessageCount: action.payload,
            }

        default:
            return state
    }
}

export const setIsInitialized = (payload) => (
    {type: SET_IS_INITIALIZED, payload}
)

export const setNewMessageCount = (payload) => (
    {type: SET_NEW_MESSAGE_COUNT, payload}
)

export const appInitialize = () => async dispatch => {
    const data = await dispatch(getAuthData())
    dispatch(setIsInitialized(true))

    if(data.resultCode === 0) {
        const messagesCount = await dialogsAPI.refreshMessages()
        dispatch(setNewMessageCount(messagesCount))
    }
}
