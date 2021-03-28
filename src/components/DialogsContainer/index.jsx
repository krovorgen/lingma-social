import React from "react";

import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import Dialogs from "../Dialogs";

const DialogsContainer = ({dialogsPage, dispatch}) => {

    let onMessageChange = (text) => {
        dispatch(updateNewMessageTextCreator(text));
    };

    let addMessage = () => {
        dispatch(addMessageCreator());
    };

    return (
        <Dialogs updateNewMessage={onMessageChange} sendMessage={addMessage} dialogsPage={dialogsPage}/>
    )
}

export default DialogsContainer;