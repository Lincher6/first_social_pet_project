import {ADD_MESSAGE, UPDATE_NEW_MESSAGE} from "./actionTypes";

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimon'},
        {id: 2, name: 'Masha'},
        {id: 3, name: 'Dasha'},
        {id: 4, name: 'Pasha'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'My first message'},
        {id: 3, message: 'and second'},
    ],
    newMessage: ''
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.dialogsPage.newMessage
            }
            state.dialogsPage.messages.push(newMessage)
            state.dialogsPage.newMessage = ''
            return state
        case UPDATE_NEW_MESSAGE:
            state.dialogsPage.newMessage = action.newText
            return state
        default:
            return state
    }
}


export const addMessageActionCreator = () => (
    {type: ADD_MESSAGE}
)

export const updateNewMessageActionCreator = (text) => (
    {type: UPDATE_NEW_MESSAGE, newText: text}
)