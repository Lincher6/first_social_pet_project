import React from 'react'
import classes from './Button.module.css'

const Button = props => {
    const cls = [classes.base]
    if (props.type === 'faint') {
        cls.push(classes.faint)
    }

    return (
        <button {...props} className={cls.join(' ')}>
            {props.children}
        </button>
    )
}

export default Button
