import {Button, TextArea} from "../../components/common/Inputs/Inputs";
import React from "react";
import classes from './MessageForm.module.css'
import {Form} from "formik";

const submitOnEnter = (e, handleSubmit) => {
    if (e.key === 'Enter' && e.shiftKey === false) {
        e.preventDefault()
        handleSubmit()
    }
}

export const MessageForm = (props) => {
    return (
        <Form className={classes.messageForm}>
            <TextArea
                autoFocus
                error={props.errors.newMessage}
                onChange={props.handleChange}
                name={'newMessage'}
                placeholder={'Текст'}
                onKeyDown={ e => submitOnEnter(e, props.handleSubmit)}
            />
            <div className={classes.errorMessage}>
                {props.errors.newMessage}
            </div>
            <div>
                <Button type='submit'>Отправить</Button>
            </div>
        </Form>
    )
}
