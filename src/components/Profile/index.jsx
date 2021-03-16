import React from "react";

import styles from "./style.module.scss";
import MyPosts from "./MyPosts";

const Profile = () => {
    return (
        <div className={styles["main-page"]}>
            <div className={styles["main-page__images"]}>
                <img src="img/main-bg.jpg" alt="" className={styles["main-page__img"]}/>
            </div>
            <div className={styles["main-page__container"]}>
                <div>ava + description</div>
                <MyPosts/>
            </div>
        </div>
    )
}

export default Profile;