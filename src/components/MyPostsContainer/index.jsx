import React from "react";

import {addPostCreator, updateNewPostTextCreator} from "../../redux/profile-reducer";
import MyPosts from "../MyPosts";

const MyPostsContainer = ({
                     posts,
                     newPostText,
                     dispatch
                 }) => {

    let onPostChange = (text) => {
        dispatch(updateNewPostTextCreator(text));
    };

    let addPosts = () => {
        dispatch(addPostCreator());
    };

    return (
        <MyPosts updateNewPostText={onPostChange} addPost={addPosts} newPostText={newPostText} posts={posts}/>
    )
}

export default MyPostsContainer;