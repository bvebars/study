import React from "react";
import CSS from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElement = state.dialogs.map((dialog) => {
        return (
            <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>
        )
    });

    let messageElement = state.messages.map((message) => {
        return (
            <Message message={message.message} id={message.id} key={message.id}/>
        )
    });

    let newMessageBody = state.newMessageText;

    let onSendMessageClick = () => {
        props.sendMessage()
    };

    let onNewMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessage(text)
    };

    if (!props.isAuth) {
        return <Redirect to={"/login"}/>
    }

    return (
        <div className={CSS.dialogs}>
            <div className={CSS.dialogItem}>
                {dialogsElement}
            </div>
            <div className={CSS.messages}>
                <div>{messageElement}</div>
                <div>
                    <textarea
                        onChange={onNewMessageChange}
                        value={newMessageBody}
                        placeholder="Enter message"></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Отправить</button>
                </div>
            </div>
        </div>
    )

};

export default Dialogs