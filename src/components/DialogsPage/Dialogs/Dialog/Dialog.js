import React from "react";
import classes from "./Dialog.module.css";
import {NavLink} from "react-router-dom";
import noPhoto from '../../../../assets/empty-avatar.png'

const Dialog = props => {
    return(
            <NavLink
                to={`/dialogs/${props.id}`}
                className={classes.dialog}
                activeClassName={classes.active}
            >
                <div>
                    <img src={noPhoto} alt=""/>
                </div>
                <div>
                    {props.name}
                </div>
            </NavLink>
    )
}

export default Dialog