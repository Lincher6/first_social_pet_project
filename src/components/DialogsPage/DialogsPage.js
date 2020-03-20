import React from "react";
import classes from './DialogsPage.module.css'
import Dialogs from "./Dialogs/Dialogs";
import Messages from "./Messages/Messages";

const DialogsPage = props => {

    return(
        <div className={classes.dialogsWrapper}>
            <Dialogs/>
            <Messages/>
        </div>
    )
}

export default DialogsPage