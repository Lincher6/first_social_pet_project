import React from 'react';
import classes from './MyStuff.module.css'

const MyStuff = (props) => (
    <div className={classes.myStuffWrapper}>
        <div className={classes.myStuff}>
            <div>
                <div>
                    Documents
                </div>
                <div style={{textAlign: 'right'}}>
                    (12)
                </div>
            </div>
            <div>
                <div>
                    Videos
                </div>
                <div style={{textAlign: 'right'}}>
                    (43)
                </div>
            </div>
            <div>
                <div>
                    Pictures
                </div>
                <div style={{textAlign: 'right'}}>
                    (145)
                </div>
            </div>
            <div>
                <div>
                    Music
                </div>
                <div style={{textAlign: 'right'}}>
                    (3)
                </div>
            </div>
            <div>
                <div>
                    Games
                </div>
                <div style={{textAlign: 'right'}}>
                    (12)
                </div>
            </div>
        </div>
    </div>



)

export default MyStuff;