import React from 'react';
import classes from './MyStuff.module.css'

const MyStuff = (props) => (
    <div className={classes.myStuff}>
        <div>
            Friends
        </div>
        <div>
            Photos
        </div>
        <div>
            Videos
        </div>
        <div>
            Games
        </div>
    </div>


)

export default MyStuff;