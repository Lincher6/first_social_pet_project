import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import classes from './Profile.module.css'
import MyStuff from "./MyStuff/MyStuff";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo
                {...props.profile}
                profileStatus={props.profileStatus}
                setProfileStatus={props.setProfileStatus}
            />
            <div className={classes.profileContent}>
                <MyStuff/>
                <MyPosts
                    {...props.profile}
                    posts={props.posts}
                    addPost={props.addPost}
                />
            </div>

        </div>
    )
}

export default Profile;