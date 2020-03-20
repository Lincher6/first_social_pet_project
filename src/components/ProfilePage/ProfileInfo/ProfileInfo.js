import React from "react";
import classes from './ProfileInfo.module.css'
import noPhoto from '../../../assets/empty-avatar.png'
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = props => {
    return (
        <div className={classes.info}>
            <div className={classes.avatar}>
                <img src={props.photos.large != null ? props.photos.large : noPhoto} alt=""/>
            </div>
            <div className={classes.description}>
                <div className={classes.name}>{props.fullName}</div>
                <ProfileStatus
                    profileStatus={props.profileStatus}
                    setProfileStatus={props.setProfileStatus}
                />
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default ProfileInfo