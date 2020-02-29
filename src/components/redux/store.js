const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST = 'UPDATE_NEW_POST'

let store = {
    _state: {
        dialogsPage: {
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
            ]
        },
        profilePage: {
            posts: [
                {id: 1, postText: 'Hi, how are you?', likes: 5},
                {id: 2, postText: 'It\'s my first post', likes: 13},
                {id: 3, postText: 'Now second', likes: 22},
                {id: 4, postText: 'And final', likes: 1},
            ],
            newPost: ''
        }

    },

    _callSubscriber() {},
    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                let newPost = {
                    id: 5,
                    postText: this._state.profilePage.newPost,
                    likes: Math.round(Math.random() * 100)
                };
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPost = '';
                this._callSubscriber(store);
                break;

            case UPDATE_NEW_POST:
                this._state.profilePage.newPost = action.newText;
                this._callSubscriber(store);
                break;
        }
    }

}

export const addPostActionCreator = () => (
    {type: ADD_POST}
)

export const updateNewPostActionCreator = (text) => (
    {type: UPDATE_NEW_POST, newText: text}
)

export default store