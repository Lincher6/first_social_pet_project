import React, {useRef, useEffect} from "react";
import classes from './Messages.module.css'
import Message from "./Message/Message";
import audio from '../../../assets/BlobSound.ogg'
import {MessageForm} from "../../../forms/messageForm/MessageForm";
import {withFormik} from "formik";
import * as yup from "yup";

const Messages = props => {
    const blobSound = new Audio(audio)
    const MessageReduxForm = withFormik({
        validationSchema: yup.object().shape({
            newMessage: yup.string().required('обязательное поле')
        }),
        handleSubmit(values) {
            blobSound.play()
            props.addMessage(values.newMessage)
        }
    })(MessageForm)

    const addMessage = (values) => {
        blobSound.play()
        props.addMessage(values.newMessage)
    }

    const ref = useRef(null)

    const autoScroll = () => {
        ref.current.scrollIntoView({ behavior: "smooth", block: 'nearest' })
    }

    useEffect(autoScroll, [props.messages])

    return (
        <div>
            <div className={classes.messages}>
                {props.messages.map((item, index) => {
                    return (
                        <div key={index}>
                            <Message
                                text={item.message}
                                isMine={item.isMine}
                            />
                            <div ref={ref}></div>
                        </div>
                    )
                })}

            </div>
            <MessageReduxForm />
        </div>

    )
}

export default Messages