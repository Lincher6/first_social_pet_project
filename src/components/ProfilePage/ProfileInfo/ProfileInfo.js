import React from "react";
import classes from './ProfileInfo.module.css'
import {connect} from "react-redux";
import {
    getProfile,
    getProfileStatus, setPhoto,
    setProfileStatus,
    updateProfileInfo
} from "../../../redux/profileReducer";
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto";
import {ProfileInfoTable} from "./ProfileInfoTable/ProfileInfoTable";

const ProfileInfo = ({profile, ...props}) => {
    return (
        <div className={classes.info}>
            <ProfilePhoto photos={profile.photos} isOwner={props.isOwner} setPhoto={props.setPhoto}/>
            <div>
                <div className={classes.name}>{profile.fullName}</div>
                <ProfileInfoTable {...props} {...profile}/>
            </div>

        </div>
    )
}

const mapStateToProps = state => ({
    profile: state.profileReducer.profile,
    authUserId: state.authReducer.userId,
    profileStatus: state.profileReducer.profileStatus,
})

const mapDispatchToProps = {
    getProfile,
    getProfileStatus,
    setProfileStatus,
    updateProfileInfo,
    setPhoto
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfo)