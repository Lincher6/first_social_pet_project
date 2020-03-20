import React from 'react'
import classes from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {
    state = {
        isEditMode: false,
        profileStatus: this.props.profileStatus
    }

    toggleEditMode = () => {
        this.setState({
            isEditMode: !this.state.isEditMode,
        })

        this.props.setProfileStatus(this.state.profileStatus)
    }

    onStatusChange = event => {
        this.setState({
            profileStatus: event.target.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.profileStatus !== this.props.profileStatus) {
            this.setState({
                profileStatus: this.props.profileStatus
            })
        }
    }


    render() {
        return <div className={classes.status}>
            {this.state.isEditMode
                ? <div className={classes.editModeOn}>
                    <input
                        value={this.state.profileStatus}
                        onBlur={this.toggleEditMode}
                        autoFocus={true}
                        onChange={this.onStatusChange}
                    />
                </div>
                : <div className={classes.editModeOff}>
                    <span
                        onDoubleClick={this.toggleEditMode}
                    >{this.props.profileStatus}</span>
                </div>
            }
        </div>
    }
}

export default ProfileStatus