import React from "react";
import classes from "./Message.module.css";
import noPhoto from "../../../../assets/images/empty-avatar.png"
import {FaTimes} from "react-icons/all";

const Message = props => {
    const date = new Date(props.addedAt).toLocaleDateString()

    let cls = [classes.messageWrapper]
    if (!props.isMine) {
        cls.push(classes.personMessage)
    }

    return (
        <div className={cls.join(' ')}>
            <div className={classes.photo}>
                {
                    props.isMine
                        ? <img src={props.myPhoto || noPhoto} alt=""/>
                        : <img src={props.currentDialogPhoto || noPhoto} alt=""/>
                }
            </div>
            <div className={classes.message}>
                {props.body}
                <div className={classes.date}>
                    {props.addedAt && date}
                </div>
                <div className={classes.delete}
                     onClick={() => props.deleteMessage(props.id)}
                >
                    <FaTimes/>
                </div>
            </div>
        </div>

    )
}

export default Message