import React from 'react'
import User from "./User/User";
import {follow, unFollow} from "../../../redux/usersReducer";
import {startDialog} from "../../../redux/dialogsReducer";
import {connect} from "react-redux";

const Users = props => {

    return (
        <React.Fragment>
            {
                props.users.map((user) => (
                    <User
                        key={user.id}
                        {...user}
                        {...props}
                    />
                ))
            }
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    users: state.usersReducer.users,
    followingInProgress: state.usersReducer.followingInProgress,
})

const mapDispatchToProps = {
    follow,
    unFollow,
    startDialog
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)