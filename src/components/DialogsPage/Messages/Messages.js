import React from "react";
import classes from './Messages.module.css'
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../../redux/dialogsReducer";

const Messages = props => {
    const updateNewMessage = (event) => {
        const newMessageText = event.target.value
        props.dispatch(updateNewMessageActionCreator(newMessageText))
    }

    const addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    return(
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

            <textarea
                value={props.state.newMessage}
                onChange={updateNewMessage}
            ></textarea>
            <button
                onClick={addMessage}
            >
                Отправить сообщение
            </button>
        </div>
    )
}

export default Messages