import React from "react";
import classes from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = props => {

    return(
        <div className={classes.dialogsWrapper}>
            <div className={classes.users}>
                {props.state.dialogs.map((item, index) => {
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
                {props.state.messages.map((item, index) => {
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