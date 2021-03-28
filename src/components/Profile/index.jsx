import React from "react";

import ProfileInfo from "../ProfileInfo";
import MyPostsContainer from "../MyPostsContainer";

import styles from "./style.module.scss";

const Profile = ({profilePage, dispatch}) => {

    return (
        <div className={styles["main-page"]}>
            <ProfileInfo/>
            <MyPostsContainer
                posts={profilePage.posts}
                newPostText={profilePage.newPostText}
                dispatch={dispatch}
            />
        </div>
    )
}

export default Profile;