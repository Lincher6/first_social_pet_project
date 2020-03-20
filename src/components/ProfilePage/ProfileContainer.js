import React, {Component} from 'react'
import {connect} from "react-redux";
import {
    addPost, getProfile, getProfileStatus, setProfileStatus
} from "../../redux/profileReducer";
import Loader from "../common/Loader/Loader";
import {withRouter} from "react-router-dom";
import Profile from "./Profile";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends Component {
    componentDidMount() {

        let userId = this.props.match.params.userId
        userId = userId ? userId : this.props.currentProfileId

        this.props.getProfile(userId)
        this.props.getProfileStatus(userId)
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
    currentProfileId: state.profileReducer.currentProfileId,
    isLoading: state.profileReducer.isLoading,
    posts: state.profileReducer.posts,
    profileStatus: state.profileReducer.profileStatus

})

const mapDispatchToProps = {
    addPost,
    getProfile,
    getProfileStatus,
    setProfileStatus
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(ProfileContainer)