import React, {Component} from 'react'
import {connect} from "react-redux";
import {
    addPost, getProfile, getProfileStatus, setProfileStatus, updateProfileInfo
} from "../../redux/profileReducer";
import Loader from "../common/Loader/Loader";
import {withRouter} from "react-router-dom";
import Profile from "./Profile";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        userId = userId ? userId : this.props.authUserId

        this.props.getProfileStatus(userId)
        this.props.getProfile(userId)
    }

    render() {
        return (
            this.props.isLoading || !this.props.profile
                ? <Loader/>
                : <Profile {...this.props} />
        )
    }
}

const mapStateToProps = state => ({
    profile: state.profileReducer.profile,
    authUserId: state.authReducer.userId,
    isLoading: state.profileReducer.isLoading,
    posts: state.profileReducer.posts,
    profileStatus: state.profileReducer.profileStatus,
})

const mapDispatchToProps = {
    addPost,
    getProfile,
    getProfileStatus,
    setProfileStatus,
    updateProfileInfo
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(ProfileContainer)