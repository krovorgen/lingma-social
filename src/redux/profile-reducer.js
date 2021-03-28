const ADD_POST = "ADD-POST";
const UPDATE_ADD_POST_TEXT = "UPDATE-ADD-POST-TEXT";

let initialState = {
    posts: [],
    newPostText: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 1,
                message: state.newPostText,
                like: 0,
            }
            state.posts.unshift(newPost);
            state.newPostText = "";
            return state
        case UPDATE_ADD_POST_TEXT:
            state.newPostText = action.newText;
            return state
        default :
            return state
    }
};

export const addPostCreator = () => ({type: ADD_POST});
export const updateNewPostTextCreator = (text) => ({type: UPDATE_ADD_POST_TEXT, newText: text});

export default profileReducer;