// Business Logic Layer

const ADD_POST = "ADD-POST";
const UPDATE_ADD_POST_TEXT = "UPDATE-ADD-POST-TEXT";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";

let store = {
    _state: {
        profilePage: {
            posts: [],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Maksim"},
                {id: 2, name: "Sergey"},
                {id: 3, name: "Vadim"},
            ],
            messages: [],
            newMessageText: '',
        },
    },
    _callSubscriber() {
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        console.log(action)
        if (action.type === ADD_POST) {
            let newPost = {
                id: 1,
                message: this._state.profilePage.newPostText,
                like: 0,
            }
            this._state.profilePage.posts.unshift(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        }

        if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 1,
                message: this._state.dialogsPage.newMessageText,
            }
            this._state.dialogsPage.messages.unshift(newMessage);
            this._state.dialogsPage.newMessageText = "";
            this._callSubscriber(this._state);
        }

        if (action.type === UPDATE_ADD_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }

        if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
};

export const addPostCreator = () => ({type: ADD_POST});
export const addMessageCreator = () => ({type: ADD_MESSAGE});
export const updateNewPostTextCreator = (text) => ({type: UPDATE_ADD_POST_TEXT, newText: text});
export const updateNewMessageTextCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

window.store = store; // For tracking in the console

export default store;