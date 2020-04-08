import React, {useState, useEffect} from 'react'
import classes from './DescriptionItem.module.css'

const DescriptionItem = props => {
    const itemKey = Object.keys(props.item)[0]
    const itemValue = props.item[itemKey]
    const newItem = {...props.item}
    let [editMode, setEditMode] = useState(false)
    let [item, setItem] = useState(itemValue)

    const activateEditMode = () => {
        if (props.profileId === props.authUserId) {
            setEditMode(true)
        }
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        newItem[itemKey] = item
        console.log(newItem)
        props.updateItem(props.authUserId, {...props.profile, ...newItem})
    }

    const onStatusChange = event => {
        setItem(event.target.value)
    }

    useEffect(() => {
        setItem(itemValue)
    }, [itemValue])

    return (
        <div className={classes.description}>
            <div className={classes.characteristic}>
                {props.name}
            </div>
            {editMode
                ? <div className={classes.editModeOn}>
                    <input
                        value={item || 'None'}
                        onBlur={deactivateEditMode}
                        autoFocus={true}
                        onChange={onStatusChange}
                    />
                </div>
                : <div className={classes.editModeOff}>
                    <span
                        onClick={activateEditMode}
                    >{item || 'None'}</span>
                </div>
            }
        </div>
    )
}

export default DescriptionItem
