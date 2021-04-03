const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
    dialogs: [
        { id: 1, name: 'Maksim' },
        { id: 2, name: 'Sergey' },
        { id: 3, name: 'Vadim' },
    ],
    messages: [],
    newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_MESSAGE:
        return {
            ...state,
            newMessageText: '',
            messages: [...state.messages, { id: 1, message: state.newMessageText }],
        };

    case UPDATE_NEW_MESSAGE_TEXT:
        return {
            ...state,
            newMessageText: action.newText,
        };
    default:
        return state;
    }
};

export const addMessageCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default dialogsReducer;
