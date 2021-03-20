import React from "react";

import DialogItem from "../DialogItem";
import MessageItem from "../MessageItem";

import styles from "./style.module.scss";

const Dialogs = () => {

    let dialogs = [
        {id: 1, name: "Maksim"},
        {id: 2, name: "Sergey"},
        {id: 3, name: "Vadim"},
    ];

    let messages = [
        {id: 1, message: "Hello, world!"},
        {id: 2, message: "Привет, мир!"},
        {id: 3, message: "Hallo, Welt!"},
    ];

    let dialogsElements = dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map((m) => <MessageItem message={m.message}/>)

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