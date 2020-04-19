import React from 'react'
import classes from './../ProfileInfo.module.css'
import noPhoto from "../../../../assets/images/empty-avatar.png";
import cameraIcon from "../../../../assets/images/icons/cameraIcon.png";


const ProfilePhoto = ({photos, isOwner, setPhoto}) => {

    const onPhotoChange = e => {
        if (e.target.files.length) {
            setPhoto(e.target.files[0])
        }
    }

    return (
        <div className={classes.avatar}>
            <img src={photos.large != null ? photos.large : noPhoto} alt=""/>
            {isOwner
                ? <label className={classes.photoLoader}>
                    <img src={cameraIcon} alt=""/>
                    <input type='file' onChange={onPhotoChange}/>
                </label>
                : null
            }
        </div>
    )
}

export default ProfilePhoto