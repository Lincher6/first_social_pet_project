import React from 'react'
import classes from './Login.module.css'
import {Field, reduxForm} from "redux-form";

const Login = (props) => {

    const LoginForm = (props) => {
        return <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'input'} placeholder={'login'} name={'login'}/>
            </div>
            <div>
                <Field component={'input'} placeholder={'password'} name={'password'}/>
            </div>
            <div>
                <Field component={'input'} type={'checkbox'} name={'rememberMe'}/>Remember me
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    }

    const LoginReduxReducer = reduxForm({
        form: 'login',
    })(LoginForm)

    const onSubmit = (data) => {
        props.login(data)
    }

    return (
        <div className={classes.login}>
            <LoginReduxReducer onSubmit={onSubmit}/>
        </div>
    )
}

export default Login