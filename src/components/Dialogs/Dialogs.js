import React from "react";
import classes from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = props => {
    const state = {
        dialogsData: [
            {id: 1, name: 'Dimon'},
            {id: 2, name: 'Masha'},
            {id: 3, name: 'Dasha'},
            {id: 4, name: 'Pasha'},
        ],
        messageData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'My first message'},
            {id: 3, message: 'and second'},
        ]
    }

    return(
        <div className={classes.dialogsWrapper}>
            <div className={classes.users}>
                {state.dialogsData.map((item, index) => {
                    return (
                        <Dialog
                            key={index}
                            name={item.name}
                            id={item.id}
                        />
                    )
                })}
            </div>
            <div className={classes.messages}>
                {state.messageData.map((item, index) => {
                    return (
                        <Message
                            key={index}
                            text={item.message
                            }
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Dialogs