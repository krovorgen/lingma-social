import React from "react";

import {addPostCreator, updateNewPostTextCreator} from "../../redux/profile-reducer";
import MyPosts from "../MyPosts";
import StoreContext from "../../StoreContext";

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let onPostChange = (text) => {
                        store.dispatch(updateNewPostTextCreator(text));
                    };

                    let addPosts = () => {
                        store.dispatch(addPostCreator());
                    };
                    return (
                        <MyPosts
                            updateNewPostText={onPostChange}
                            addPost={addPosts}
                            newPostText={state.profilePage.newPostText}
                            posts={state.profilePage.posts}
                        />
                    )

                }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;