import React from "react";
import classes from "./Dialog.module.css";
import {NavLink} from "react-router-dom";
import noPhoto from '../../../../assets/images/empty-avatar.png'

const Dialog = props => {
    return (
        <NavLink
            to={`/dialogs/${props.id}`}
            className={classes.dialog}
            activeClassName={classes.active}
            onClick={() => props.setCurrentDialog(props.id, props.index)}
        >
            <div>
                <img src={props.photos.small || noPhoto} alt=""/>
            </div>
            <div>
                {props.userName}
            </div>
            {props.hasNewMessages
                ? <div className={classes.newMessages}>
                    <div>{props.newMessagesCount < 99 ? props.newMessagesCount : 99}</div>
                </div>
                : null
            }
        </NavLink>
    )
}

export default Dialog