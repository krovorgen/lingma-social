import React from "react";

import styles from "./style.module.scss";

const Post = ({message, like}) => {
    return (
        <div className={styles["post"]}>
            <div className={styles["gradient-border"]}>
                <img className={styles["post__img"]} src="img/avatar.jpg" alt="avatar"/>
            </div>
            <div className={styles["post__text"]}>{message || "Empty message"}</div>
            <div className={styles["post__likes"]}>
                {like || 0}
                <div className={styles["post__likes-images"]}>
                    <svg height="22px" version="1.1" viewBox="0 0 512 512" width="22px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="_x31_66_x2C__Heart_x2C__Love_x2C__Like_x2C__Twitter"><g><path d="M365.4,59.628c60.56,0,109.6,49.03,109.6,109.47c0,109.47-109.6,171.8-219.06,281.271    C146.47,340.898,37,278.568,37,169.099c0-60.44,49.04-109.47,109.47-109.47c54.73,0,82.1,27.37,109.47,82.1    C283.3,86.999,310.67,59.628,365.4,59.628z"/></g></g><g id="Layer_1"/></svg>
                </div>
            </div>
        </div>
    )
}

export default Post;