import React, {useLayoutEffect} from 'react'
import {connect} from "react-redux";
import {getProfile, getProfileStatus, setProfile} from "../../redux/profileReducer";
import Loader from "../common/Loader/Loader";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileContent from "./ProfileContent/ProfileContent";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const MyProfilePage = props => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
        props.getProfile(props.authUserId)
        props.getProfileStatus(props.authUserId)

    }, [])

    return (
        props.isLoading
            ? <Loader/>
            : <div>
                <ProfileInfo/>
                <ProfileContent/>
            </div>
    )

}

const mapStateToProps = state => ({
    profile: state.profileReducer.profile,
    userData: state.authReducer.userData,
    authUserId: state.authReducer.userId,
    isLoading: state.profileReducer.isLoading,
})

const mapDispatchToProps = {
    getProfile,
    getProfileStatus,
    setProfile
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(MyProfilePage)