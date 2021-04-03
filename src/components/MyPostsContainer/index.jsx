import { connect } from 'react-redux';
import { addPostCreator, updateNewPostTextCreator } from '../../redux/profile-reducer';
import MyPosts from '../MyPosts';

const mapStateToProps = (state) => ({
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
});

const mapDispatchToProps = (dispatch) => ({
    updateNewPostText: (text) => {
        dispatch(updateNewPostTextCreator(text));
    },
    addPost: () => {
        dispatch(addPostCreator());
    },
});

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
