import React from "react";

import styles from "./style.module.scss";
import Post from "../Post";

const MyPosts = () => {

    let postsData = [
        {id: 1, message: "Hello maks", like: "1"},
        {id: 2, message: "Hi", like: "2"},
        {id: 3, message: "", like: ""},
    ];

    return (
        <div className={styles["my-posts"]}>My posts
            <form className={styles["my-posts__form"]} action="#">
                <textarea className={styles["my-posts__textarea"]} name="" placeholder="Write your message"/>
                <button className={styles["my-posts__button"]} type="submit">Add post</button>
            </form>
            <Post message={postsData[0].message} like={postsData[0].like}/>
            <Post message={postsData[1].message} like={postsData[1].like}/>
            <Post message={postsData[2].message} like={postsData[2].like}/>
        </div>
    )
}

export default MyPosts;