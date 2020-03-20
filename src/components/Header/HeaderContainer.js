import React, {Component} from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthData} from "../../redux/authReducer";

class HeaderContainer extends Component{

    componentDidMount() {
        this.props.getAuthData()
    }


    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = state => ({
    login: state.authReducer.login,
    isAuthorized: state.authReducer.isAuthorized,

})

export default connect(mapStateToProps, {getAuthData} )(HeaderContainer)