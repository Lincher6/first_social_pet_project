import React from 'react'
import classes from './TextArea.module.css'

const TextArea = props => (
    <input
        className={classes.base}
    >{props.children}</input>
)

export default TextArea