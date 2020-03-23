import React from 'react'
import classes from './TextArea.module.css'

export const FormComponent = Component => ({input, meta, ...props}) => {
    const error = meta.error && meta.submitFailed && !meta.active
    const cls = [classes.base]
    if (error) {
        cls.push(classes.error)
    }
    return <div className={classes.formComponent}>
        <Component
            {...props}
            {...input}
            className={cls.join(' ')}
        />
        <div className={classes.errorMessage}>
            {error ? meta.error : ''}
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
