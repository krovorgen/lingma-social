// Business Logic Layer

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hello maks", like: "1"},
            {id: 2, message: "Hi", like: "2"},
            {id: 3, message: "", like: ""},
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

export default state;