import React from 'react'
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";
import {login} from "../../../redux/authReducer";
import classes from "./Login.module.css";
import {withFormik} from "formik";
import * as yup from "yup";
import {LoginForm} from "../../../forms/loginForm/LoginForm";

const Login = props => {

    const LoginFormik = withFormik({
        mapPropsToValues() {
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
        props.isAuthorized
        ? <Redirect to={'/profile'}/>
        : <div className={classes.login}>
            <div className={classes.title}>Вход</div>
            <LoginFormik />
            {props.authError ? <div className={classes.error}>{props.authError}</div>: null}
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthorized: state.authReducer.isAuthorized,
    authError: state.authReducer.authError
})

const mapDispatchToProps = {
    login
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(Login)