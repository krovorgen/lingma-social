import React from "react";

import Post from "../Post";

import styles from "./style.module.scss";

const MyPosts = ({
                     posts,
                     newPostText,
                     dispatch
                 }) => {
    let postsElements = posts.map(p => <Post message={p.message} like={p.like}/>)

    let newPostElement = React.createRef();

    let addPosts = () => {
        dispatch({type: "ADD-POST"});
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        dispatch({type: "UPDATE-ADD-POST-TEXT", newText: text});
    };

    return (
        <div className={styles["my-posts"]}>My posts
            <div className={styles["my-posts__form"]}>
                <textarea className={styles["my-posts__textarea"]} onChange={onPostChange} ref={newPostElement}
                          placeholder="Write your message" value={newPostText}/>
                <button className={styles["my-posts__button"]} onClick={addPosts}>Add post</button>
            </div>
            {postsElements}
        </div>
    )
}

export default MyPosts;