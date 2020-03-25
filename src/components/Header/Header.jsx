import React from 'react';
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
import ProfileSmall from "./ProfileSmall/ProfileSmall";
import Search from "../common/Search/Search";

const Header = (props) => {
    return <div className={classes.headerWrapper}>
        <header className={classes.header}>
            <div className={classes.appName}>
                VIRAL
            </div>
            <div className={classes.search}>
                <Search/>
            </div>

            <div className={classes.auth}>
                <div>
                    {props.isAuthorized
                        ? <ProfileSmall
                            login={props.login}
                            logout={props.logout}
                            likes={props.likes}
                            {...props.userData}/>
                        : <div>
                            <div>
                                <NavLink className={classes.login} to={`/login`}>Войти</NavLink>
                            </div>
                            <div>
                                <NavLink className={classes.register} to={`/login`}>Зарегистрироваться</NavLink>
                            </div>
                        </div>
                    }
                </div>
            </div>

        </header>
        <div className={classes.bottom}></div>
    </div>
}

export default Header;