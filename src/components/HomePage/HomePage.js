import React, {useLayoutEffect} from 'react';
import classes from './HomePage.module.css'
import logo from '../../assets/images/icons/umbrella-logo.png'
import {NavLink} from "react-router-dom";
import usersIcon from '../../assets/images/icons/usersIcon.png'
import profileIcon from '../../assets/images/icons/profileIcon.png'
import dialogsIcon from '../../assets/images/icons/dialogIcon.png'
import loginIcon from '../../assets/images/icons/log-in.png'
import registerIcon from '../../assets/images/icons/register.png'

const HomePage = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const pages = [
        {icon: profileIcon, text: "Profile", link: '/profile'},
        {icon: usersIcon, text: "Users", link: '/users'},
        {icon: dialogsIcon, text: "Dialogs", link: '/dialogs'},
    ]

    return (
        <div className={classes.home}>
            <div className={classes.title}>
                VIRAL
            </div>
            <div className={classes.logo}>
                <img src={logo} alt=""/>
            </div>
            <div className={classes.pages}>
                {
                    pages.map((item, index) => {
                        return (
                            <NavLink to={item.link}
                                     className={classes.page}
                                     key={index}
                            >
                                <img src={item.icon} alt="x"/>
                                <div className={classes.pageText}>{item.text}</div>
                            </NavLink>
                        )
                    })
                }
            </div>
            <div className={classes.pages}>
                <NavLink to={'/login'} className={classes.page}>
                    <img src={loginIcon} alt="x"/>
                    <div className={classes.pageText}>Login</div>
                </NavLink>
                <a href={'https://social-network.samuraijs.com/signUp'} className={classes.page} target={'_blank'}>
                    <img src={registerIcon} alt="x"/>
                    <div className={classes.pageText}>SignUp</div>
                </a>

            </div>
        </div>
    )
}

export default HomePage;