import React from "react";
import classes from './Post.module.css'

const Post = props => {
    return(
        <div className={classes.post}>
            <img src="https://res.cloudinary.com/teepublic/image/private/s--CPAbSMK6--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1531446318/production/designs/2885122_0.jpg" alt=""/>
            <div className={classes.message}>
                {props.message}
            </div>
            <div className={classes.likes}>
                <span role='img' aria-labelledby="like">👍</span>{props.likes}
            </div>
        </div>
    )
}

export default Post