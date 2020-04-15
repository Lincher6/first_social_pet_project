import {
    ADD_MESSAGE, DELETE_MESSAGE,
    GET_MESSAGES,
    SET_CURRENT_DIALOG_ID, SET_CURRENT_DIALOG_PHOTO,
    SET_DIALOGS,
    TOGGLE_IS_LOADING, TOGGLE_MESSAGES_FETCHING
} from "./actionTypes";
import {dialogsAPI, profileAPI} from "../api/api";
import {setNewMessageCount} from "./appReducer";

let initialState = {
    currentDialogId: null,
    currentDialogPhoto: null,
    dialogs: [],
    messages: [{body: "Выберите собеседника", isMine: true}],
    newMessage: '',
    isLoading: false,
    messagesFetching: false
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let message = {
                body: action.message,
                isMine: true
            }
            return {
                ...state,
                messages: [...state.messages, message]
            }

        case GET_MESSAGES:
            return {
                ...state,
                messages: action.messages.length > 0
                    ? action.messages
                    : [{body: "Начните диалог", isMine: true}]
            }

        case DELETE_MESSAGE:
            return {
                ...state,
                messages: state.messages.filter(item => item.id !== action.payload)
            }

        case SET_DIALOGS:
            return {
                ...state,
                dialogs: action.payload
            }

        case SET_CURRENT_DIALOG_ID:
            return {
                ...state,
                currentDialogId: action.payload
            }

        case SET_CURRENT_DIALOG_PHOTO:
            return {
                ...state,
                currentDialogPhoto: action.payload
            }

        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }

        case TOGGLE_MESSAGES_FETCHING:
            return {
                ...state,
                messagesFetching: action.payload
            }

        default:
            return state
    }
}


export const getMessagesAction = (messages) => (
    {type: GET_MESSAGES, messages}
)

export const addMessageAction = (message) => (
    {type: ADD_MESSAGE, message}
)

export const setDialogs = (payload) => (
    {type: SET_DIALOGS, payload}
)

export const setCurrentDialogId = (payload) => (
    {type: SET_CURRENT_DIALOG_ID, payload}
)

export const setCurrentDialogPhoto = (payload) => (
    {type: SET_CURRENT_DIALOG_PHOTO, payload}
)
export const toggleIsLoading = (payload) => (
    {type: TOGGLE_IS_LOADING, payload}
)

export const toggleMessagesFetching = (payload) => (
    {type: TOGGLE_MESSAGES_FETCHING, payload}
)

export const deleteMessageAction = (payload) => (
    {type: DELETE_MESSAGE, payload}
)

export const updateDialogs = () => async dispatch => {
    const data = await dialogsAPI.getDialogs()
    dispatch(setDialogs(data))
}

export const getDialogs = () => async dispatch => {
    dispatch(toggleIsLoading(true))
    const data = await dialogsAPI.getDialogs()
    dispatch(setDialogs(data))
    dispatch(toggleIsLoading(false))
}

export const getMessages = (userId) => async dispatch => {
    dispatch(toggleMessagesFetching(true))
    const profile = await profileAPI.getProfile(userId)
    if (profile.photos) {
        dispatch(setCurrentDialogPhoto(profile.photos.small))
    }

    const data = await dialogsAPI.getMessages(userId)
    dispatch(getMessagesAction(data.items))
    dispatch(toggleMessagesFetching(false))

    const newMessages = await dialogsAPI.refreshMessages()
    dispatch(setNewMessageCount(newMessages))
}

export const sendMessage = (userId, message) => async dispatch => {
    dispatch(addMessageAction(message))
    const data = await dialogsAPI.sendMessage(userId, message)
    if (data.resultCode === 0) {
        dispatch(updateDialogs())
    }
}

export const startDialog = (userId) => async dispatch => {
    await dialogsAPI.setNewDialog(userId)
    dispatch(updateDialogs())
    dispatch(setCurrentDialogId(userId))
    dispatch(getMessages(userId))
}

export const deleteMessage = (messageId) => async dispatch => {
    dispatch(deleteMessageAction(messageId))
    await dialogsAPI.deleteMessage(messageId)
}
