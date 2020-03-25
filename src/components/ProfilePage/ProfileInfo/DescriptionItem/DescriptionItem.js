import React from 'react'
import classes from './../ProfileInfo.module.css'

const DescriptionItem = props => (
    <div className={classes.description}>
        <div className={classes.characteristic}>
            {props.name}
        </div>
        <div>
            {props.value || 'None' }
        </div>
    </div>
)

export default DescriptionItem
