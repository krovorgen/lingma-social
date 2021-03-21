// Business Logic Layer

import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [],
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

export let addPost = (postMessage) => {
    let newPost = {
        id: 1,
        message: postMessage,
        like: 0,
    }
    rerenderEntireTree(state);
    state.profilePage.posts.unshift(newPost);
}

export default state;