import React, {Component} from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthData, logout} from "../../redux/authReducer";

class HeaderContainer extends Component{
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = state => ({
    login: state.authReducer.login,
    likes: state.authReducer.likes,
    userData: state.authReducer.userData,
    isAuthorized: state.authReducer.isAuthorized,

})

export default connect(mapStateToProps, {getAuthData, logout} )(HeaderContainer)