// Business Logic Layer

import {rerenderEntireTree} from "../render";

let state = {
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
};

export let addPost = () => {
    let newPost = {
        id: 1,
        message: state.profilePage.newPostText,
        like: 0,
    }
    state.profilePage.posts.unshift(newPost);
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;