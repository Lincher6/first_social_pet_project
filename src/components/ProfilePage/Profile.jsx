import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import classes from './Profile.module.css'
import MyStuff from "./MyStuff/MyStuff";
import MyFriends from "./MyFriens/MyFriends";
import {updateProfileInfo} from "../../redux/profileReducer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo
                {...props.profile}
                authUserId={props.authUserId}
                profileStatus={props.profileStatus}
                setProfileStatus={props.setProfileStatus}
                updateProfileInfo={props.updateProfileInfo}
            />
            <div className={classes.profileContent}>
                <MyStuff/>
                <MyPosts
                    {...props.profile}
                    profile={props.profile}
                    posts={props.posts}
                    addPost={props.addPost}
                />
                <MyFriends/>
            </div>

        </div>
    )
}

export default Profile;