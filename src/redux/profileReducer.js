import {ADD_POST, UPDATE_NEW_POST} from "./actionTypes";


let initialState = {
    posts: [
        {id: 1, postText: 'Hi, how are you?', likes: 5},
        {id: 2, postText: 'It\'s my first post', likes: 13},
        {id: 3, postText: 'Now second', likes: 22},
        {id: 4, postText: 'And final', likes: 1},
    ],
    newPost: ''
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                postText: state.profilePage.newPost,
                likes: Math.round(Math.random() * 100)
            };
            state.profilePage.posts.push(newPost);
            state.profilePage.newPost = '';
            return state

        case UPDATE_NEW_POST:
            state.profilePage.newPost = action.newText;
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => (
    {type: ADD_POST}
)
export const updateNewPostActionCreator = (text) => (
    {type: UPDATE_NEW_POST, newText: text}
)