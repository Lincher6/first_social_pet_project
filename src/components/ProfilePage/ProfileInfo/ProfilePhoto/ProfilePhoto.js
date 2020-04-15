import React from 'react'
import classes from './../ProfileInfo.module.css'
import noPhoto from "../../../../assets/images/empty-avatar.png";

const ProfilePhoto = ({photos}) => (
    <div className={classes.avatar}>
        <img src={photos.large != null ?photos.large : noPhoto} alt=""/>
    </div>
)

export default ProfilePhoto