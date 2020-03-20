import React from 'react'
import classes from './Button.module.css'

const Button = props => (
    <button className={classes.base}>{props.children}</button>
)

export default Button
