import React from 'react'
import classes from './Login.module.css'
import {withFormik} from "formik";
import {LoginForm} from "../../../forms/loginForm/LoginForm";
import * as yup from "yup";

const Login = (props) => {

    const LoginFormik = withFormik({
        mapPropsToValues({login, password}) {
            return {login: '', password: ''}
        },
        validationSchema: yup.object().shape({
            login: yup.string().min(3).required('обязательное поле'),
            password: yup.string().min(3).required('обязательное поле')
        }),
        handleSubmit(values) {
            props.login(values)
        }
    })(LoginForm)

    return (
        <div className={classes.login}>
            <div className={classes.title}>Вход</div>
            <LoginFormik />
            {props.authError ? <div className={classes.error}>Неверный логин или пароль</div>: null}
        </div>
    )
}

export default Login