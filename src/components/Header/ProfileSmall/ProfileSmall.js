import React from 'react';
import classes from './ProfileSmall.module.css'
import gear from '../../../assets/gearIcon.png'
import {NavLink} from "react-router-dom";
import noPhoto from '../../../assets/empty-avatar.png'
import ProfileMenu from "../ProfileMenu/ProfileMenu";

const ProfileSmall = (props) => (
    <div className={classes.profileSmall}>
        <div className={classes.options}>
            <img src={gear} alt=""/>
            <div className={classes.menu}>
                <ProfileMenu logout={props.logout}/>
            </div>
        </div>
        <div className={classes.photoSmall}>
            <NavLink to={`/profile`}>
                <img src={props.photos.small != null ? props.photos.small : noPhoto} alt=""/>
            </NavLink>
        </div>
        <NavLink to={`/profile`}>
            <div className={classes.name}>
                {props.login}
            </div>
            <div className={classes.likes}>
                Likes {props.likes}
            </div>
        </NavLink>

    </div>
)

export default ProfileSmall;