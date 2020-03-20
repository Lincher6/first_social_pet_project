import React, {Component} from 'react'
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import Login from "./Login";
import {login} from "../../../redux/authReducer";

class LoginContainer extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <Login {...this.props}/>
        )
    }
}

const mapStateToProps = state => ({
    isAuthorized: state.authReducer.isAuthorized
})

const mapDispatchToProps = {
    login
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(LoginContainer)