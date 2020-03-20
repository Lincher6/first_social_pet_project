import React, {Component} from "react";
import {follow, getUsers, toggleFollowingInProgress, unFollow,} from "../../redux/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";
import Loader from "../common/Loader/Loader";

class UsersContainer extends Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.getUsers(this.props.currentPage, this.props.pageSize)
        }
    }

    onPageChange = page => {
        this.props.getUsers(page, this.props.pageSize)
    }

    follow = userId => {
        this.props.follow(userId)
    }

    unFollow = userId => {
        this.props.unFollow(userId)
    }

    render() {
        return <div>
            {this.props.isLoading
                ? <Loader/>
                : <Users
                    {...this.props}
                    onPageChange={this.onPageChange}
                    followHandler={this.follow}
                    unFollowHandler={this.unFollow}
                />
            }

        </div>
    }
}

const mapStateToProps = (state) => ({
    users: state.usersReducer.users,
    pageSize: state.usersReducer.pageSize,
    totalUserCount: state.usersReducer.totalUserCount,
    currentPage: state.usersReducer.currentPage,
    isLoading: state.usersReducer.isLoading,
    followingInProgress: state.usersReducer.followingInProgress
})

const mapDispatchToProps = {
    follow,
    unFollow,
    toggleFollowingInProgress,
    getUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)