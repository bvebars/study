import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessage: (text) => {
            dispatch(updateNewMessageActionCreator(text))
        },
        sendMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
