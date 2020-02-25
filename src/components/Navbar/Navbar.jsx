import React from "react";
import './Navbar.module.css';
import CSS from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={CSS.nav}>
            <div className={CSS.item}>
                <NavLink to='/users' >Users</NavLink>
            </div>
            <div className={CSS.item}>
                <NavLink to="/profile" activeClassName={CSS.active}>Profile</NavLink>
            </div>
            <div className={CSS.item}>
                <NavLink to='/dialogs' activeClassName={CSS.active}>Dialogs</NavLink>
            </div>
            <div className={CSS.item}>
                <NavLink to='/news' >News</NavLink>
            </div>
            <div className={CSS.item}>
                <NavLink to='/music' >Music</NavLink>
            </div>
            <div className={CSS.item}>
                <NavLink to='/setting' >Setting</NavLink>
            </div>

        </nav>
    )
};

export default Navbar;