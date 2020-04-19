import React, {useLayoutEffect} from 'react'
import {connect} from "react-redux";
import {getProfile, getProfileStatus} from "../../redux/profileReducer";
import Loader from "../common/Loader/Loader";
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileContent from "./ProfileContent/ProfileContent";

const ProfilePage = props => {
    const isOwner = !props.match.params.userId
    if (!props.isAuthorized && isOwner) {
        return <Redirect to={'/login'}/>
    }

    const userId = props.match.params.userId || props.authUserId

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
        props.getProfileStatus(userId)
        props.getProfile(userId)
    }, [props.match.params.userId])

    return (
        props.isLoading || !props.profile
            ? <Loader/>
            : <div>
                <ProfileInfo isOwner={isOwner}/>
                <ProfileContent />
            </div>
    )

}

const mapStateToProps = state => ({
    profile: state.profileReducer.profile,
    authUserId: state.authReducer.userId,
    isLoading: state.profileReducer.isLoading,
    isAuthorized: state.authReducer.isAuthorized,
})

const mapDispatchToProps = {
    getProfile,
    getProfileStatus,
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(ProfilePage)