import React from "react";
import classes from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = props => {
    return(
        <div className={classes.dialogsWrapper}>
            <div className={classes.users}>
                <Dialog name='Dimon' id={1}/>
                <Dialog name='Masha' id={2}/>
                <Dialog name='Dasha' id={3}/>
                <Dialog name='Pasha' id={4}/>
            </div>
            <div className={classes.messages}>
                <Message text='Hi'/>
                <Message text='My first message'/>
                <Message text='and second'/>
            </div>
        </div>
    )
}

export default Dialogs