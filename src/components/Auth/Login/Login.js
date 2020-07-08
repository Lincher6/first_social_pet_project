import React from 'react'
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { compose } from "redux";
import { login } from "../../../redux/authReducer";
import classes from "./Login.module.css";
import { withFormik } from "formik";
import * as yup from "yup";
import { LoginForm } from "../../../forms/loginForm/LoginForm";



const Login = props => {

    const LoginFormik = withFormik({
        mapPropsToValues({ captchaUrl }) {
            return { login: '', password: '', captcha: '', captchaUrl }
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
        props.isAuthorized
            ? <Redirect to={'/profile/:userId?'} />
            : <div className={classes.login}>
                <div className={classes.title}>Вход</div>
                <LoginFormik captchaUrl={props.captcha} />
                {props.authError ? <div className={classes.error}>{props.authError}</div> : null}
                <div className={classes.test}>
                    <div>Email: free@samuraijs.com</div>
                    <div>Password: free</div>
                </div>
            </div>
    )
}

const mapStateToProps = state => ({
    isAuthorized: state.authReducer.isAuthorized,
    authError: state.authReducer.authError,
    captcha: state.authReducer.captcha
})

const mapDispatchToProps = {
    login
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(Login)