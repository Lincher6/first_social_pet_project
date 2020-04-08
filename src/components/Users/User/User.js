import React, {useState} from 'react'
import classes from './User.module.css'
import userPhoto from "../../../assets/empty-avatar.png";
import {NavLink} from "react-router-dom";
import Button from "../../common/Button/Button";

const User = props => {

    return (
        <div className={classes.user}>
            <div>
                <NavLink to={`/profile/${props.id}`}>
                    <div className={classes.picture}>
                        <img src={props.photos.small != null ? props.photos.small : userPhoto} alt=""/>
                    </div>
                </NavLink>
                <div className={classes.followButton}>
                    {
                        props.followed
                            ? <Button
                                type={'faint'}
                                onClick={() => props.unFollowHandler(props.id)}
                                disabled={props.followingInProgress.some(id => id === props.id)}
                            >Unfollow</Button>
                            : <Button
                                onClick={() => props.followHandler(props.id)}
                                disabled={props.followingInProgress.some(id => id === props.id)}
                            >Follow</Button>
                    }
                </div>
            </div>
            <div className={classes.userInfo}>
                <div>
                    <NavLink to={`/profile/${props.id}`}  className={classes.name}>
                        <div>{props.name}</div>
                    </NavLink>
                    <div className={classes.status}>
                        {props.status || 'No status'}
                    </div>
                </div>
                <div>
                    <div className={classes.location}>
                        <div>Страна: {'user.location.country'}</div>
                        <div>Город: {'user.location.city'}</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default User