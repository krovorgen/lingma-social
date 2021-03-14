import React from "react";

import styles from "./style.module.scss";
import MyPosts from "./MyPosts";

const Profile = () => {
    return (
        <div className={styles["content"]}>
            <div className={styles["content__images"]}>
                <img src="img/main-bg.jpg" alt="" className={styles["content__img"]}/>
            </div>
            <div className={styles["content__container"]}>
                <div>ava + description</div>
                <MyPosts/>
            </div>
        </div>
    )
}

export default Profile;