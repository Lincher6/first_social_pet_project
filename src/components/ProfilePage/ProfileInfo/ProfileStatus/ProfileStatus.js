import React, {useState, useEffect} from 'react'
import classes from './ProfileStatus.module.css'
import editIcon from '../../../../assets/gearIcon.png'

const ProfileStatus = props => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.profileStatus)

    const activateEditMode = () => {
        if (props.profileId === props.authUserId) {
            setEditMode(true)
        }

        if (editMode) {
            props.setProfileStatus(status)
        }
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.setProfileStatus(status)
    }

    const onStatusChange = event => {
        setStatus(event.target.value)
    }

    useEffect(() => {
        setStatus(props.profileStatus)
    }, [props.profileStatus])

    return <div className={classes.status}>
        {editMode
            ? <div className={classes.editModeOn}>
                <input
                    value={status}
                    onBlur={deactivateEditMode}
                    autoFocus={true}
                    onChange={onStatusChange}
                />
            </div>
            : <div className={classes.editModeOff}>
                    <span
                        onClick={activateEditMode}
                    >{props.profileStatus || 'None'}</span>
            </div>
        }
    </div>
}

export default ProfileStatus