import React, {Component} from "react";
import {connect} from "react-redux";
import DialogsPage from "./DialogsPage";
import {addMessage} from "../../redux/dialogsReducer";

class DialogsPageContainer extends Component {

    render() {
        return <DialogsPage {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    dialogs: state.dialogsReducer.dialogs,
    messages: state.dialogsReducer.messages,
})

const mapDispatchToProps = {
    addMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(DialogsPageContainer)