const ADD_POST = 'ADD-POST';
const UPDATE_ADD_POST_TEXT = 'UPDATE-ADD-POST-TEXT';

const initialState = {
    posts: [],
    newPostText: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_POST:
        return {
            ...state,
            newPostText: '',
            posts: [{ id: 1, message: state.newPostText, like: 0 }, ...state.posts],
        };
    case UPDATE_ADD_POST_TEXT:
        return {
            ...state,
            newPostText: action.newText,
        };
    default:
        return state;
    }
};

export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostTextCreator = (text) => ({ type: UPDATE_ADD_POST_TEXT, newText: text });

export default profileReducer;
