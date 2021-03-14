import React from "react";

import styles from "./style.module.scss";

const Post = ({message}) => {
    return (
        <div className={styles["post"]}>
            <img className={styles["post__img"]} src="img/avatar.jpg" alt="avatar"/>
            <div className={styles["post__text"]}>{message || "Empty message"}</div>
        </div>
    )
}

export default Post;