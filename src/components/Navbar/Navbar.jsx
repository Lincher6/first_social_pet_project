import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import logo from "../../assets/umbrella-logo.png";

const Navbar = () => {
    return <nav className={classes.nav}>
        <div className={classes.logo}>
            <img src={logo} alt=''/>
        </div>
        <div className={classes.item}>
            <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/dialogs" activeClassName={classes.active}>Dialogs</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/users" activeClassName={classes.active}>Users</NavLink>
        </div>
    </nav>
}

export default Navbar;