import React from "react";
import classes from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";

const Dialogs = props => {
    return(
        <div className={classes.users}>
            {props.dialogs.map((item, index) => {
                return (
                    <Dialog
                        key={index}
                        name={item.name}
                        id={item.id}
                    />
                )
            })}
        </div>
    )
}

export default Dialogs