import React from 'react';

import Post from '../Post';

import styles from './style.module.scss';

const MyPosts = ({
    posts,
    newPostText,
    updateNewPostText,
    addPost,
}) => {
    const postsElements = posts.map((p) => <Post message={p.message} like={p.like} />);

    const newPostElement = React.createRef();

    const onPostChange = () => {
        const text = newPostElement.current.value;
        updateNewPostText(text);
    };

    const onAddPost = () => {
        addPost();
    };

    return (
        <div className={styles['my-posts']}>
            <div className={styles['my-posts__form']}>
                <textarea className={styles['my-posts__textarea']} onChange={onPostChange} ref={newPostElement} placeholder="Write your message" value={newPostText} />
                <button className={styles['my-posts__button']} onClick={onAddPost} type="submit">Add post</button>
            </div>
            {postsElements}
        </div>
    );
};

export default MyPosts;
