// Business Logic Layer

let state = {
    profilePage: {
        posts: [

        ],
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

    state.profilePage.posts.push(newPost);
}

export default state;