import React from "react";

import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import Dialogs from "../Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogsPage;
                    let onMessageChange = (text) => {
                        store.dispatch(updateNewMessageTextCreator(text));
                    };

                    let addMessage = () => {
                        store.dispatch(addMessageCreator());
                    };
                    return (
                        <Dialogs updateNewMessage={onMessageChange} sendMessage={addMessage} dialogsPage={state}/>
                    )
                }

            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;