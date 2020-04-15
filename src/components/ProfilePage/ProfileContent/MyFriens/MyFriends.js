import React from 'react';
import classes from './MyFriends.module.css'
import noPhoto from '../../../../assets/images/empty-avatar.png'

const MyFriends = (props) => (
    <div className={classes.myFriendsWrapper}>
        <div className={classes.myFriends}>
            <div className={classes.friend}>
                <img src={noPhoto} alt=""/>
                <div>
                    FriendName
                </div>
            </div>
            <div className={classes.friend}>
                <img src={noPhoto} alt=""/>
                <div>
                    FriendName
                </div>
            </div>
            <div className={classes.friend}>
                <img src={noPhoto} alt=""/>
                <div>
                    FriendName
                </div>
            </div>
        </div>
    </div>



)

export default MyFriends;