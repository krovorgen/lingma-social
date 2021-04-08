const ADD_POST = 'ADD-POST';
const UPDATE_ADD_POST_TEXT = 'UPDATE-ADD-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

const initialState = {
    posts: [],
    newPostText: '',
    profile: {},
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
    case SET_USER_PROFILE:
        return {
            ...state,
            profile: action.profile,
        };
    default:
        return state;
    }
};

export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostTextCreator = (text) => ({ type: UPDATE_ADD_POST_TEXT, newText: text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export default profileReducer;
