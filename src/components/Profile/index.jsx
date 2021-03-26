import React from "react";

import MyPosts from "../MyPosts";
import ProfileInfo from "../ProfileInfo";

import styles from "./style.module.scss";

const Profile = ({profilePage, dispatch}) => {

    return (
        <div className={styles["main-page"]}>
            <ProfileInfo/>
            <MyPosts posts={profilePage.posts}
                     newPostText={profilePage.newPostText}
                     dispatch={dispatch}
            />
        </div>
    )
}

export default Profile;