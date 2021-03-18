import React from "react";

import DialogItem from "../DialogItem";
import MessageItem from "../MessageItem";

import styles from "./style.module.scss";

const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: "Maksim"},
        {id: 2, name: "Sergey"},
        {id: 3, name: "Vadim"},
    ];

    let messagesData = [
        {id: 1, message: "Hello, world!"},
        {id: 2, message: "Привет, мир!"},
        {id: 3, message: "Hallo, Welt!"},
    ];

    return (
        <div className={styles["dialogs"]}>
            <div className={styles["dialog-items"]}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
            </div>
            <div className={styles["message-items"]}>
                <MessageItem message={messagesData[0].message}/>
                <MessageItem message={messagesData[1].message}/>
                <MessageItem message={messagesData[2].message}/>
            </div>
        </div>
    )
}

export default Dialogs;