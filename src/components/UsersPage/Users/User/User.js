import React from 'react'
import classes from './User.module.css'
import userPhoto from "../../../../assets/images/empty-avatar.png";
import {NavLink} from "react-router-dom";
import {Button} from "../../../common/Inputs/Inputs";

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
                                dim
                                onClick={() => props.unFollow(props.id)}
                                disabled={props.followingInProgress.some(id => id === props.id)}
                            >Unfollow</Button>
                            : <Button
                                onClick={() => props.follow(props.id)}
                                disabled={props.followingInProgress.some(id => id === props.id)}
                            >Follow</Button>
                    }
                </div>
            </div>
            <div className={classes.userInfo}>
                <div>
                    <NavLink to={`/profile/${props.id}`} className={classes.name}>
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
                <NavLink to={`/dialogs/${props.id}`}
                         className={classes.sendMessage}
                         onClick={() => props.startDialog(props.id)}
                >
                    <Button dim>Написать</Button>
                </NavLink>

            </div>
        </div>
    )
}

export default User