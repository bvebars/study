import React from "react";
import CSS from './../Dialogs.module.css'

//get message from user through props

const Message = (props) => {
    return (
        <div className={CSS.messages}>
            {props.message}
        </div>
    );

};

export default Message