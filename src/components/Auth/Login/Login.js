import React from 'react'
import classes from './Login.module.css'
import {Field, reduxForm} from "redux-form";
import {CheckBox, FormComponent} from "../../common/TextArea/TextArea";
import Button from "../../common/Button/Button";
import {maxLength, minLength, required} from "../../../validators/validators";

const Login = (props) => {
    const maxLength20 = maxLength(20)
    const minLength20 = minLength(5)
    const InputField = FormComponent('input');

    const LoginForm = (props) => {
        return <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={InputField}
                    placeholder={'Логин'}
                    name={'login'}
                    validate={[required, maxLength20, minLength20]}
                />
            </div>
            <div>
                <Field
                    component={InputField}
                    placeholder={'Пароль'}
                    name={'password'}
                    type={'password'}
                    validate={[required, maxLength20, minLength20]}/>

            </div>
            <div className={classes.rememberMe}>
                <Field component={CheckBox} type={'checkbox'} name={'rememberMe'}/>
                <div className={classes.text}>
                    Запомнить меня
                </div>
            </div>
            <div>
                <Button>Войти</Button>
            </div>
        </form>
    }

    const LoginReduxForm = reduxForm({
        form: 'login',
    })(LoginForm)

    const onSubmit = (data) => {
        props.login(data)
    }

    return (
        <div className={classes.login}>
            <div className={classes.title}>Вход</div>
            <LoginReduxForm onSubmit={onSubmit}/>
            {props.authError ? <div className={classes.error}>Неверный логин или пароль</div>: null}
        </div>
    )
}

export default Login