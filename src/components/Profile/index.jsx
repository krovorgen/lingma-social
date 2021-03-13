import React from "react";

import styles from "./style.module.scss";

const Profile = () => {
    return (
        <div className={styles["content"]}>
            <div className={styles["content__images"]}>
                <img src="img/main-bg.jpg" alt="" className={styles["content__img"]}/>
            </div>
            <div className={styles["content__container"]}>
                <div>ava + description</div>
                <div>My posts
                    <div>new post</div>
                    <div>
                        <div>post 1</div>
                        <div>post 2</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;