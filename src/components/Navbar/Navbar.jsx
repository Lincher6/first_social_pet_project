import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={classes.nav}>
        <div className={classes.item}>
            <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/dialogs" activeClassName={classes.active}>Dialogs</NavLink>
        </div>
        {/*<div>*/}
        {/*    <NavLink>News</NavLink>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*    <NavLink>Music</NavLink>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*    <NavLink>Settings</NavLink>*/}
        {/*</div>*/}
    </nav>
}

export default Navbar;