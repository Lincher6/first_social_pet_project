import React from 'react';
import classes from './Header.module.css'
import {NavLink, Redirect} from "react-router-dom";
import logo from '../../assets/umbrella-logo.png'

const Header = (props) => {
    return <div className={classes.headerWrapper}>
        <header className={classes.header}>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>

            <div className={classes.auth}>
                <div>
                    {props.isAuthorized
                        ? <NavLink to={`/profile`}>{props.login}</NavLink>
                        : <NavLink to={`/login`}>LOGIN</NavLink>}
                </div>
            </div>

        </header>
    </div>
}

export default Header;