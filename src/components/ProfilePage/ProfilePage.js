import React, {useLayoutEffect} from 'react'
import {connect} from "react-redux";
import {getProfile, getProfileStatus} from "../../redux/profileReducer";
import Loader from "../common/Loader/Loader";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileContent from "./ProfileContent/ProfileContent";

const ProfilePage = props => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
        let userId = props.match.params.userId
        props.getProfileStatus(userId)
        props.getProfile(userId)
    }, [])

    return (
        props.isLoading || !props.profile
            ? <Loader/>
            : <div>
                <ProfileInfo/>
                <ProfileContent/>
            </div>
    )

}

const mapStateToProps = state => ({
    profile: state.profileReducer.profile,
    authUserId: state.authReducer.userId,
    isLoading: state.profileReducer.isLoading,
})

const mapDispatchToProps = {
    getProfile,
    getProfileStatus,
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(ProfilePage)