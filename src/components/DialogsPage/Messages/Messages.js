import React, {useRef, useEffect} from "react";
import classes from './Messages.module.css'
import Message from "./Message/Message";
import audio from '../../../assets/sounds/BlobSound.ogg'
import {MessageForm} from "../../../forms/messageForm/MessageForm";
import {withFormik} from "formik";
import * as yup from "yup";
import {connect} from "react-redux";
import {
    deleteMessage,
    getMessages,
    sendMessage,
} from "../../../redux/dialogsReducer";
import Loader from "../../common/Loader/Loader";

const blobSound = new Audio(audio)

const Messages = props => {
    const MessageReduxForm = withFormik({
        mapPropsToValues({currentDialogId}) {
            return {currentDialogId}
        },
        validationSchema: yup.object().shape({
            newMessage: yup.string().required('обязательное поле')
        }),
        handleSubmit(values) {
            if (values.currentDialogId) {
                blobSound.play()
                props.sendMessage(values.currentDialogId, values.newMessage)
            }
        }
    })(MessageForm)

    const ref = useRef(null)
    const autoScroll = () => {
        ref.current.scrollIntoView({behavior: "smooth", block: 'nearest'})
    }
    useEffect(autoScroll, [props.messages])

    return (
        <div>
            <div className={classes.messages}>
                {props.messagesFetching
                    ? <Loader/>
                    : props.messages.map((item, index) => {
                        return (
                            <div key={index}>
                                <Message
                                    {...item}
                                    deleteMessage={props.deleteMessage}
                                    isMine={item.isMine || item.senderId === props.userId}
                                    currentDialogPhoto={props.currentDialogPhoto}
                                    myPhoto={props.myPhoto}
                                />
                            </div>
                        )
                    })}
                {}
                <div ref={ref}></div>

            </div>
            <MessageReduxForm currentDialogId={props.currentDialogId}/>
        </div>

    )
}

const mapStateToProps = (state) => ({
    messages: state.dialogsReducer.messages,
    userId: state.authReducer.userId,
    currentDialogId: state.dialogsReducer.currentDialogId,
    currentDialogPhoto: state.dialogsReducer.currentDialogPhoto,
    myPhoto: state.authReducer.userData.photos.small,
    messagesFetching: state.dialogsReducer.messagesFetching
})

const mapDispatchToProps = {
    getMessages,
    sendMessage,
    deleteMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages)