import React from 'react';
import classes from './ProfileMenu.module.css'
import {NavLink} from "react-router-dom";

const ProfileMenu = (props) => (
    <div className={classes.profileMenu}>
        <div>
            <NavLink to={'/profile'} exact>Профиль</NavLink>
        </div>
        <div>
            Настройки
        </div>
        <div onClick={props.logout}>
            Выход
        </div>
    </div>
)

export default ProfileMenu;