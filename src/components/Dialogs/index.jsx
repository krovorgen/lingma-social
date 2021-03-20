import React from "react";

import DialogItem from "../DialogItem";
import MessageItem from "../MessageItem";

import styles from "./style.module.scss";

const Dialogs = ({state}) => {

    let dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map((m) => <MessageItem message={m.message}/>)

    return (
        <div className={styles["dialogs"]}>
            <div className={styles["dialog-items"]}>
                {dialogsElements}
            </div>
            <div className={styles["message-items"]}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;