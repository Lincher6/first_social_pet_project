import React from "react";
import classes from './Post.module.css'
import noPhoto from '../../../../assets/empty-avatar.png'
import {FaThumbsUp} from "react-icons/all";

const Post = props => {
    return(
        <div className={classes.post}>
            <img src={props.smallPicture || noPhoto} alt=''/>
            <div className={classes.message}>
                {props.message}
            </div>
            <div className={classes.likes}>
                <span role='img' aria-labelledby="like"><FaThumbsUp/> </span>{props.likes}
            </div>
        </div>
    )
}

export default Post