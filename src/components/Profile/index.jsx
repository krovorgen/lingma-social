import React from "react";

import MyPosts from "../MyPosts";
import ProfileInfo from "../ProfileInfo";

import styles from "./style.module.scss";

const Profile = ({state, addPost}) => {

    return (
        <div className={styles["main-page"]}>
            <ProfileInfo/>
            <MyPosts posts={state.posts} addPost={addPost}/>
        </div>
    )
}

export default Profile;