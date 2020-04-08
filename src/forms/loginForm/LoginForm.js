import React from 'react'
import classes from "../../forms/loginForm/LoginForm.module.css";
import {Form} from "formik";
import {Button, Input, CheckBox} from "../../components/common/Inputs/Inputs";


export const LoginForm = ({errors, touched, handleChange, values}) => {
    return (
        <Form>
            <div className={classes.field}>
                <Input
                    onChange={handleChange}
                    placeholder={'Логин'}
                    name={'login'}
                    error={touched.login && errors.login}
                    value={values.login}
                />
                <div className={classes.errorMessage}> {(touched.login && errors.login) ? errors.login: null} </div>
            </div>
            <div className={classes.field}>
                <Input
                    onChange={handleChange}
                    placeholder={'Пароль'}
                    name={'password'}
                    type={'password'}
                    error={touched.password && errors.password}
                    value={values.password}
                />
                <div className={classes.errorMessage}>{touched.password && errors.password}</div>
            </div>
            <div className={classes.rememberMe}>
                <CheckBox name={'rememberMe'}/>
                <div>
                    Запомнить меня
                </div>
            </div>
            <div>
                <Button type='submit'>Войти</Button>
            </div>
        </Form>
    )
}