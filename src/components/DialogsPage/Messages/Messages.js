import React from "react";
import classes from './Messages.module.css'
import Message from "./Message/Message";
import Button from "../../common/Button/Button";
import {Field, reduxForm} from "redux-form";
import {FormComponent} from "../../common/TextArea/TextArea";
import {maxLength, required} from "../../../validators/validators";

const Messages = props => {
    const maxLength100 = maxLength(100)
    const TextField = FormComponent('textarea');

    const NewMessageForm = (props) => (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={TextField}
                name={'newMessage'}
                placeholder={'New Message'}
                validate={[required, maxLength100]}
            />
            <Button>Отправить сообщение</Button>
        </form>
    )

    const NewMessageReduxForm = reduxForm({
        form: 'newMessage'
    })(NewMessageForm)

    const addMessage = (values) => {
        props.addMessage(values.newMessage)
    }


    return <div className={classes.messages}>
            {props.messages.map((item, index) => {
                return (
                    <Message
                        key={index}
                        text={item.message}
                    />
                )
            })}

            <NewMessageReduxForm onSubmit={addMessage}/>
        </div>
}

export default Messages