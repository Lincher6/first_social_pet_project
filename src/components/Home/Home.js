import React from 'react';
import classes from './Home.module.css'
import logo from '../../assets/umbrella-logo.png'
import {NavLink} from "react-router-dom";

const Home = (props) => (
    <div className={classes.home}>
        <div className={classes.title}>
            VIRAL
        </div>
        <div className={classes.logo}>
            <img src={logo} alt=""/>
        </div>
        <NavLink to={`/users`} className={classes.findFriends}>
            НАЙТИ ДРУЗЕЙ
        </NavLink>

    </div>
)

export default Home;