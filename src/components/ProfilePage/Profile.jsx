import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo
                {...props.profile}
                profileStatus={props.profileStatus}
                setProfileStatus={props.setProfileStatus}
            />
            <MyPosts
                {...props.profile}
                posts={props.posts}
                addPost={props.addPost}
            />
        </div>
    )
}

export default Profile;