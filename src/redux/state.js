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
    getState() {
        return this._state
    },
    _callSubscriber() {
    },
    addPost() {
        let newPost = {
            id: 1,
            message: this._state.profilePage.newPostText,
            like: 0,
        }
        this._state.profilePage.posts.unshift(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
};

export default store;