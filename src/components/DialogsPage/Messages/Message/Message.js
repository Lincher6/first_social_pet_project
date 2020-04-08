import React from "react";
import classes from "./Message.module.css";

const Message = props => {
    const cls = [classes.message]
    if (!props.isMine) {
        cls.push(classes.person)
    }

    return(
        <div className={cls.join(' ')}>{props.text}</div>
    )
}

export default Message