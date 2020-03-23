import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import logo from "../../assets/umbrella-logo.png";
import profileIcon from '../../assets/profileIcon.png'
import dialogIcon from '../../assets/dialogIcon.png'
import usersIcon from '../../assets/usersIcon.png'

const Navbar = () => {
    return <nav className={classes.nav}>
        <div className={classes.logo}>
            <img src={logo} alt=''/>
        </div>
        <div className={classes.page}>
            <NavLink to="/profile" activeClassName={classes.active}>
                <div className={classes.item}>
                    <img src={profileIcon} alt=''/>
                    <div>Profile</div>
                </div>
            </NavLink>
        </div>
        <div className={classes.page}>
            <NavLink to="/dialogs" activeClassName={classes.active}>
                <div className={classes.item}>
                    <img src={dialogIcon} alt=''/>
                    <div>Dialogs</div>
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

export default Navbar;