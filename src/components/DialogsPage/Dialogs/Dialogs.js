import React from "react";
import classes from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import {connect} from "react-redux";

const Dialogs = props => {
    console.log(props)
    return(
        <div className={classes.users}>
            {props.dialogs.map((item, index) => {
                return (
                    <Dialog
                        key={index}
                        name={item.name}
                        id={item.id}
                    />
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => ({
    dialogs: state.dialogsReducer.dialogs
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs)