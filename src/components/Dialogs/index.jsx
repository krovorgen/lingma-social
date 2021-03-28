import React from "react";

import DialogItem from "../DialogItem";
import MessageItem from "../MessageItem";

import styles from "./style.module.scss";

const Dialogs = ({dialogsPage, updateNewMessage, sendMessage}) => {

    let dialogsElements = dialogsPage.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = dialogsPage.messages.map((m) => <MessageItem message={m.message}/>)


    let onMessageChange = (e) => {
        let text = e.target.value;
        updateNewMessage(text);
    };

    let addMessage = () => {
        sendMessage();
    };

    return (
        <div className={styles["dialogs"]}>
            <div className={styles["dialog-items"]}>
                {dialogsElements}
            </div>
            <div className={styles["message-items"]}>
                <ul className={styles["message-elements"]}>
                    {messagesElements}
                </ul>
                <div className={styles["message-form"]}>
                    <textarea className={styles["message-form__textarea"]} onChange={onMessageChange} value={dialogsPage.newMessageText}/>
                    <button className={styles["message-form__button"]} onClick={addMessage}>Add post</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;