// Business Logic Layer

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
        if (action.type === "ADD-POST") {
            let newPost = {
                id: 1,
                message: this._state.profilePage.newPostText,
                like: 0,
            }
            this._state.profilePage.posts.unshift(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        }

        if (action.type === "UPDATE-ADD-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
};
window.store = store; // For tracking in the console

export default store;