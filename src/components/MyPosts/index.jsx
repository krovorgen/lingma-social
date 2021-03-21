import React from "react";

import Post from "../Post";

import styles from "./style.module.scss";

const MyPosts = ({
                     posts
                 }) => {

    let postsElements = posts.map(p => <Post message={p.message} like={p.like}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
    }

    return (
        <div className={styles["my-posts"]}>My posts
            <form className={styles["my-posts__form"]} action="#">
                <textarea className={styles["my-posts__textarea"]} ref={newPostElement} placeholder="Write your message"/>
                <button className={styles["my-posts__button"]} onClick={addPost}>Add post</button>
            </form>
            {postsElements}
        </div>
    )
}

export default MyPosts;