import React from "react";
import classes from './Post.module.css'
import noPhoto from '../../../../../assets/images/empty-avatar.png'
import {FaThumbsUp} from "react-icons/all";

const Post = props => {
    return(
        <div className={classes.post}>
            <img src={props.smallPicture || noPhoto} alt=''/>
            <div className={classes.message}>
                {props.message}
            </div>
            <div className={classes.date}>
                {props.date.toLocaleString()}
            </div>
        </div>
    )
}

export default Post