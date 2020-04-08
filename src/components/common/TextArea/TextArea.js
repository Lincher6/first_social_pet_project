import React from 'react'
import classes from './TextArea.module.css'

export const FormComponent = Component => ({input, meta, ...props}) => {
    const {error, submitFailed} = meta || {error: false, submitFailed: false}
    const isError = error && submitFailed
    const cls = [classes.base]
    if (isError) {
        cls.push(classes.error)
    }

    if (props.type === 'empty') {
        cls.push(classes.empty)
    }

    return <div className={classes.formComponent}>
        <Component
            {...props}
            {...input}
            className={cls.join(' ')}
        />
        <div className={classes.errorMessage}>
            {isError ? error : ''}
        </div>
    </div>
}

export const CheckBox = ({input, meta, ...props}) => {
    return <input
        type={'checkbox'}
        className={classes.checkBox}
        {...input}
        {...props}
    />
}
