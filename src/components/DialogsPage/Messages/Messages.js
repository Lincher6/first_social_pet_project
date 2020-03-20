import React from "react";
import classes from './Messages.module.css'
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../../redux/dialogsReducer";
import {connect} from "react-redux";

const Messages = props => {
    const updateNewMessage = (event) => {
        props.updateNewMessage(event.target.value)
    }

    return(
        <div className={classes.messages}>
            {props.messages.map((item, index) => {
                return (
                    <Message
                        key={index}
                        text={item.message
                        }
                    />
                )
            })}

            <textarea
                value={props.newMessage}
                onChange={updateNewMessage}
            ></textarea>
            <button
                onClick={props.addMessage}
            >
                Отправить сообщение
            </button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    messages: state.dialogsReducer.messages,
    newMessage: state.dialogsReducer.newMessage
})

const mapDispatchToProps = (dispatch) => ({
    addMessage: () => dispatch(addMessageActionCreator()),
    updateNewMessage: (text) => dispatch(updateNewMessageActionCreator(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(Messages)