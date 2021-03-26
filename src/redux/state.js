// Business Logic Layer

const ADD_POST = "ADD-POST";
const UPDATE_ADD_POST_TEXT = "UPDATE-ADD-POST-TEXT";

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
            messages: [
                {id: 1, message: "Hello, world!"},
                {id: 2, message: "Привет, мир!"},
                {id: 3, message: "Hallo, Welt!"},
            ],
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

        if (action.type === UPDATE_ADD_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_ADD_POST_TEXT, newText: text});

window.store = store; // For tracking in the console

export default store;