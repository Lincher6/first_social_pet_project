import {ADD_MESSAGE} from "./actionTypes";

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimon'},
        {id: 2, name: 'Masha'},
        {id: 3, name: 'Dasha'},
        {id: 4, name: 'Pasha'},
    ],
    messages: [
        {id: 1, message: 'Hi', isMine: true},
        {id: 2, message: 'My first message', isMine: true},
        {id: 3, message: 'and second', isMine: false},
        {id: 4, message: 'and third', isMine: false},
        {id: 5, message: 'and second', isMine: true},
        {id: 6, message: 'and second', isMine: true},
    ],
    newMessage: ''
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: action.message,
                isMine: true
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