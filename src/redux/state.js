// Business Logic Layer

import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
        sidebar: {},
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
};

window.store = store; // For tracking in the console

export default store;