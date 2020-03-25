import React from 'react'
import classes from './SplashScreen.module.css'
import logo from '../../../assets/umbrella-logo.png'

const SplashScreen = () => (
    <div className={classes.splashScreen}>
        <div>
            <div className={classes.picture}>
                <img src={logo} alt=""/>
            </div>
        </div>
    </div>
)

export default SplashScreen