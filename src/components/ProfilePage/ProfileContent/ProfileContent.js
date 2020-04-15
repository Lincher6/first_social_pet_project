import React from "react";
import classes from './ProfileContent.module.css'
import MyStuff from "./MyStuff/MyStuff";
import MyPosts from "./MyPosts/MyPosts";
import MyFriends from "./MyFriens/MyFriends";

const ProfileContent = () => {

    return (
        <div className={classes.profileContent}>
            <MyStuff/>
            <MyPosts/>
            <MyFriends/>
        </div>
    )

}

export default ProfileContent