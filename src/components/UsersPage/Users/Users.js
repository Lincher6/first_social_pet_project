import React from 'react'
import User from "./User/User";
import {follow, unFollow} from "../../../redux/usersReducer";
import {startDialog} from "../../../redux/dialogsReducer";
import {connect} from "react-redux";
import classes from './Users.module.css'
import Loader from "../../common/Loader/Loader";

const Users = props => {

    return (
        <div className={classes.users}>
            {props.usersFetching
                ? <Loader/>
                : props.users.map((user) => (
                    <User
                        key={user.id}
                        {...user}
                        {...props}
                    />
                ))
            }
        </div>


    )
}

const mapStateToProps = (state) => ({
    users: state.usersReducer.users,
    followingInProgress: state.usersReducer.followingInProgress,
    usersFetching: state.usersReducer.usersFetching
})

const mapDispatchToProps = {
    follow,
    unFollow,
    startDialog
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)