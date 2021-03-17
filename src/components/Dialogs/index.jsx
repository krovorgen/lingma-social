import React from "react";
import DialogItem from "./DialogItem";

import styles from "./style.module.scss";
import MessageItem from "./MessageItem";


const Dialogs = () => {
    return (
        <div className={styles["dialogs"]}>
            <div className={styles["dialog-items"]}>
                <DialogItem name="Maksim" id="1"/>
                <DialogItem name="Sergey" id="2"/>
                <DialogItem name="Vadim" id="3"/>
            </div>
            <div className={styles["message-items"]}>
                <MessageItem message="Hello world"/>
            </div>
        </div>
    )
}

export default Dialogs;