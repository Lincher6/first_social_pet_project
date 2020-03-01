import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const ProfilePage = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                state={props.state}
                dispatch={props.dispatch}
            />
        </div>
    )
}

export default ProfilePage;