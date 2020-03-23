import {ADD_MESSAGE} from "./actionTypes";

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
                message: action.message
            }
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        default:
            return state
    }
}


export const addMessage = (message) => (
    {type: ADD_MESSAGE, message}
)