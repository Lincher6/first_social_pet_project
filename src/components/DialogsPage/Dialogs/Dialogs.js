import React from "react";
import classes from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import {
    getDialogs, getMessages,
    setCurrentDialogId,
    updateDialogs
} from "../../../redux/dialogsReducer";
import {connect} from "react-redux";
import {NavLink, withRouter} from "react-router-dom";
import {compose} from "redux";
import {Button} from "../../common/Inputs/Inputs";

const Dialogs = props => {
    const setCurrentDialog = (userId) => {
        props.setCurrentDialogId(userId)
        props.getMessages(userId)
        props.updateDialogs()
    }

    return (
        <div className={classes.users}>
            {props.dialogs.map((item, index) => {
                return (
                    <Dialog
                        setCurrentDialog={setCurrentDialog}
                        key={item.id}
                        index={index}
                        {...item}
                    />
                )
            })}
            <div className={classes.findUsers}>
                <NavLink to={`/users/`}>
                    <Button dim>Найти</Button>
                </NavLink>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    dialogs: state.dialogsReducer.dialogs,
    isLoading: state.dialogsReducer.isLoading
})

const mapDispatchToProps = {
    getDialogs,
    getMessages,
    setCurrentDialogId,
    updateDialogs,
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)