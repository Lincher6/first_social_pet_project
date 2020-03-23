import React from 'react';
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
import ProfileSmall from "./ProfileSmall/ProfileSmall";

const Header = (props) => {
    return <div className={classes.headerWrapper}>
            <header className={classes.header}>
                <div>
                    NAME
                </div>
                <div>
                    LIKES COUNT
                </div>

                <div className={classes.auth}>
                    <div>
                        {props.isAuthorized
                            ? <ProfileSmall
                                login={props.login}
                                logout={props.logout}
                                likes={props.likes}
                                {...props.userData}/>
                            : <NavLink to={`/login`}>LOGIN</NavLink>}
                    </div>
                </div>

            </header>
            <div className={classes.bottom}></div>
        </div>
}

export default Header;