import {applyMiddleware, combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

const reducers = combineReducers({
    dialogsReducer,
    profileReducer,
    usersReducer,
    authReducer,
    form: formReducer
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))