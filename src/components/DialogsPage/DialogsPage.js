import React from "react";
import classes from './DialogsPage.module.css'
import Dialogs from "./Dialogs/Dialogs";
import Messages from "./Messages/Messages";

const DialogsPage = props => {

    return(
        <div className={classes.dialogsWrapper}>
            <Dialogs dialogs={props.dialogs}/>
            <Messages messages={props.messages} addMessage={props.addMessage}/>
        </div>
    )
}

export default DialogsPage