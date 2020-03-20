import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    isAuthorized: state.authReducer.isAuthorized
})

export const withAuthRedirect = ( Component, componentProps ) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuthorized) {
                return <Redirect to={'/login'}/>
            }

            return <Component {...this.props} {...componentProps}/>
        }
    }

    return connect(mapStateToProps)(RedirectComponent)
}