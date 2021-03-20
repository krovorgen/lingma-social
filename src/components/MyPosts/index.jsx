import React from "react";

import styles from "./style.module.scss";
import Post from "../Post";

const MyPosts = () => {

    let posts = [
        {id: 1, message: "Hello maks", like: "1"},
        {id: 2, message: "Hi", like: "2"},
        {id: 3, message: "", like: ""},
    ];

    let postsElements = posts.map(p => <Post message={p.message} like={p.like}/>)

    return (
        <div className={styles["my-posts"]}>My posts
            <form className={styles["my-posts__form"]} action="#">
                <textarea className={styles["my-posts__textarea"]} name="" placeholder="Write your message"/>
                <button className={styles["my-posts__button"]} type="submit">Add post</button>
            </form>
            {postsElements}
        </div>
    )
}

export default MyPosts;