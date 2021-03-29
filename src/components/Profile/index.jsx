import React from "react";

import ProfileInfo from "../ProfileInfo";
import MyPostsContainer from "../MyPostsContainer";

import styles from "./style.module.scss";

const Profile = () => {

    return (
        <div className={styles["main-page"]}>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;