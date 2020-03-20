import React from 'react'
import classes from './Users.module.css'
import userPhoto from "../../assets/empty-avatar.png"
import {NavLink} from "react-router-dom";

const Users = props => {
    let pageCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <div className={classes.users}>
            <div className={classes.pageNumbers}>
                {
                    pages.map((page) => (
                        <span
                            key={page}
                            className={(props.currentPage === page ? classes.currentPage : null) + ' ' + classes.pageNumber}
                            onClick={() => props.onPageChange(page)}
                        >
                                {page}&nbsp;
                            </span>
                    ))
                }
            </div>
            {
                props.users.map((user) => (
                    <div className={classes.user} key={user.id}>
                        <div className={classes.userLeft}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto}/>
                            {
                                user.followed
                                    ? <button
                                        onClick={() => props.unFollowHandler(user.id)}
                                        disabled={props.followingInProgress.some(id => id === user.id)}
                                    >Unfollow</button>
                                    : <button
                                        onClick={() => props.followHandler(user.id)}
                                        disabled={props.followingInProgress.some(id => id === user.id)}
                                    >Follow</button>
                            }
                        </div>
                        <div className={classes.userRight}>
                            <div className={classes.infoLeft}>
                                <NavLink to={`/profile/${user.id}`} >
                                    <div className={classes.name}>{user.name}</div>
                                </NavLink>
                                <div className={classes.status}>{user.status}</div>
                            </div>
                            <div className={classes.infoRight}>
                                <div>Country: {'user.location.country'}</div>
                                <div>City: {'user.location.city'}</div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Users