import React from "react";

import styles from "./style.module.scss";

const Post = () => {
    return (
        <div className={styles["post"]}>
            <img className={styles["post__img"]} src="img/avatar.jpg" alt="avatar"/>
            <div className={styles["post__text"]} >Hello world</div>
        </div>
    )
}

export default Post;