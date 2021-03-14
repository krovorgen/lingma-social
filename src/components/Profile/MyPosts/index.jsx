import React from "react";

import styles from "./style.module.scss";
import Post from "./Post";

const MyPosts = () => {

    return (
        <div className={styles["my-posts"]}>My posts
            <form className={styles["my-posts__form"]} action="#">
                <textarea className={styles["my-posts__textarea"]} name="" placeholder="Write your message"/>
                <button className={styles["my-posts__button"]} type="submit">Add post</button>
            </form>
            <Post message="Hello maks"/>
            <Post message="Hi"/>
            <Post />
        </div>
    )
}

export default MyPosts;