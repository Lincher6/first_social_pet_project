import React from "react";
import classes from './ProfileInfo.module.css'
import noPhoto from '../../../assets/empty-avatar.png'
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import DescriptionItem from "./DescriptionItem/DescriptionItem";

const ProfileInfo = props => {
    return (
        <div className={classes.info}>
            <div className={classes.avatar}>
                <img src={props.photos.large != null ? props.photos.large : noPhoto} alt=""/>
            </div>
            <div>
                <div className={classes.name}>{props.fullName}</div>
                <div>
                    <div className={classes.description}>
                        <div className={classes.characteristic}>
                            Status
                        </div>
                        <ProfileStatus
                            profileStatus={props.profileStatus}
                            setProfileStatus={props.setProfileStatus}
                        />
                    </div>
                    <DescriptionItem name={'Country'}/>
                    <DescriptionItem name={'City'}/>
                    <DescriptionItem name={'Education'}/>
                    <DescriptionItem name={'Hobby'}/>
                </div>

            </div>
        </div>
    )
}

export default ProfileInfo