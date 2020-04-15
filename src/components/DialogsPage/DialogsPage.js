import React, {useLayoutEffect} from "react";
import {connect} from "react-redux";
import {
    getDialogs, getMessages,
    setCurrentDialogId,
    updateDialogs
} from "../../redux/dialogsReducer";
import {withRouter} from "react-router-dom";
import Loader from "../common/Loader/Loader";
import classes from "./DialogsPage.module.css";
import Dialogs from "./Dialogs/Dialogs";
import Messages from "./Messages/Messages";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const DialogsPage = props => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
        if (props.dialogs.length === 0) {
            props.getDialogs()
            const userId = props.match.params.userId
            if (userId) {
                props.setCurrentDialogId(userId)
                props.getMessages(userId)
            }
        } else {
            console.log('here')
            props.updateDialogs()
        }
    }, [])

    if (props.isLoading) {
        return <Loader/>
    }
    return (
        <div className={classes.dialogsWrapper}>
            <Dialogs/>
            <Messages/>
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
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)((DialogsPage))