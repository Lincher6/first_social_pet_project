import React from 'react';
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
import ProfileSmall from "./ProfileSmall/ProfileSmall";
import Search from "../common/Search/Search";
import {connect} from "react-redux";
import {getAuthData, logout} from "../../redux/authReducer";

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
                                <a className={classes.register}
                                   href={`https://social-network.samuraijs.com/signUp`}
                                   target="_blank"
                                >Зарегистрироваться</a>
                            </div>
                        </div>
                    }
                </div>
            </div>

        </header>
        <div className={classes.bottom}></div>
    </div>
}

const mapStateToProps = state => ({
    login: state.authReducer.login,
    likes: state.authReducer.likes,
    userData: state.authReducer.userData,
    isAuthorized: state.authReducer.isAuthorized,

})

export default connect(mapStateToProps, {getAuthData, logout} )(Header)