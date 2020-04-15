import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import logo from "../../assets/images/icons/umbrella-logo.png";
import profileIcon from '../../assets/images/icons/profileIcon.png'
import dialogIcon from '../../assets/images/icons/dialogIcon.png'
import usersIcon from '../../assets/images/icons/usersIcon.png'
import {connect} from "react-redux";

const Navbar = props => {
    return <nav className={classes.nav}>
        <div className={classes.logo}>
            <NavLink to={'/'}>
                <img src={logo} alt=''/>
            </NavLink>
        </div>
        <div className={classes.page}>
            <NavLink to={props.isAuth ? '/profile' : '/login'} exact activeClassName={classes.active}>
                <div className={classes.item}>
                    <img src={profileIcon} alt=''/>
                    <div>{props.isAuth ? 'Profile' : 'Login'}</div>
                </div>
            </NavLink>
        </div>
        <div className={classes.page}>
            <NavLink to={`/dialogs/${props.currentDialogId || ''}`} activeClassName={classes.active}>
                <div className={classes.item}>
                    <img src={dialogIcon} alt=''/>
                    <div>Dialogs</div>
                    {props.newMessageCount
                        ? <div className={classes.newMessageCount}>
                            <div>{props.newMessageCount < 99 ? props.newMessageCount : 99}</div>
                        </div>
                        : null
                    }
                </div>
            </NavLink>
        </div>
        <div className={classes.page}>
            <NavLink to="/users" activeClassName={classes.active}>
                <div className={classes.item}>
                    <img src={usersIcon} alt=''/>
                    <div>Users</div>
                </div>
            </NavLink>
        </div>
    </nav>
}

const mapStateToProps = state => ({
    currentDialogId: state.dialogsReducer.currentDialogId,
    isAuth: state.authReducer.isAuthorized,
    newMessageCount: state.appReducer.newMessageCount
})

export default connect(mapStateToProps, null)(Navbar);