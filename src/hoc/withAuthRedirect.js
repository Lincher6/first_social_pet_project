import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

export const withAuthRedirect = (Component, componentProps) => {
    const RedirectComponent = props => {
        if (!props.isAuthorized) {
            return <Redirect to={'/login'}/>
        }

        return <Component {...props} {...componentProps}/>
    }

    const mapStateToProps = state => ({
        isAuthorized: state.authReducer.isAuthorized
    })

    return connect(mapStateToProps, null)(RedirectComponent)
}