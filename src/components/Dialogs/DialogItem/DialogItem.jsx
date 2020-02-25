import React from "react";
import CSS from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

//Return link on /dialogs/
//Transmits: props with the following value 'username' and his 'id'

const DialogItem = (props) => {
    return (
        <div className={CSS.dialog}>
            <NavLink activeClassName={CSS.active} to={"/dialogs/" + props.id}> {props.name} </NavLink>
        </div>
    )
};



export default DialogItem