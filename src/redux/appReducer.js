import {SET_IS_INITIALIZED} from "./actionTypes";
import {getAuthData} from "./authReducer";


const initialState = {
    isInitialized: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_INITIALIZED:
            return {
                ...state,
                isInitialized: action.payload,
            }

        default:
            return state
    }
}

export const setIsInitialized = (payload) => (
    {type: SET_IS_INITIALIZED, payload}
)

export const appInitialize = () => dispatch => {
    dispatch(getAuthData()).then(() => {
        dispatch(setIsInitialized(true))
    })
}
