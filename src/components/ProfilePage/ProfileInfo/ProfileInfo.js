import React from "react";
import classes from './ProfileInfo.module.css'
import noPhoto from '../../../assets/empty-avatar.png'
import {ProfileInfoForm} from "../../../forms/profileInfoForm/ProfileInfoForm";
import {withFormik} from "formik";

const ProfileInfoFormik = withFormik({
    mapPropsToValues({profileStatus, aboutMe, lookingForAJob, isAuth, updateProfileInfo, setProfileStatus, profile, userId}) {
        return {
            status: profileStatus || 'None',
            aboutMe: aboutMe || 'None',
            lookingForAJob: lookingForAJob ? 'Да' : 'Нет',
            isAuth,
            updateProfileInfo,
            setProfileStatus,
            profile,
            userId}
    },

    handleSubmit(values) {
        values.setProfileStatus(values.status)
        values.updateProfileInfo(values.userId, {
            aboutMe: values.aboutMe,
            lookingForAJob: values.lookingForAJob === 'Да',
            lookingForAJobDescription: 'sdfsdf',
            fullName: 'IceBerg'
        })
    }
})(ProfileInfoForm)

const ProfileInfo = props => {
    return (
        <div className={classes.info}>
            <div className={classes.avatar}>
                <img src={props.photos.large != null ? props.photos.large : noPhoto} alt=""/>
            </div>
            <div>
                <div className={classes.name}>{props.fullName}</div>
                <ProfileInfoFormik {...props} isAuth={props.authUserId === props.userId} />
            </div>

        </div>
    )
}

export default ProfileInfo