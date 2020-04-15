import React from "react";
import classes from './ProfileInfo.module.css'
import {connect} from "react-redux";
import {
    getProfile,
    getProfileStatus,
    setProfileStatus,
    updateProfileInfo
} from "../../../redux/profileReducer";
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto";
import {ProfileInfoTable} from "./ProfileInfoTable/ProfileInfoTable";

const ProfileInfo = ({profile, ...props}) => {
    return (
        <div className={classes.info}>
            <ProfilePhoto photos={profile.photos}/>
            <div>
                <div className={classes.name}>{profile.fullName}</div>
                <ProfileInfoTable {...props} {...profile} isAuth={props.authUserId === profile.userId} />
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
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfo)