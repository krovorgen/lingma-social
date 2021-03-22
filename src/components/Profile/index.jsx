import React from "react";

import MyPosts from "../MyPosts";
import ProfileInfo from "../ProfileInfo";

import styles from "./style.module.scss";

const Profile = ({profilePage, addPost, updateNewPostText}) => {

    return (
        <div className={styles["main-page"]}>
            <ProfileInfo/>
            <MyPosts posts={profilePage.posts}
                     newPostText={profilePage.newPostText}
                     addPost={addPost}
                     updateNewPostText={updateNewPostText}
            />
        </div>
    )
}

export default Profile;