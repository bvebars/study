import React from "react";
import CSS from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={CSS.header}>
        <img src="http://trkraduga.ru/wp-content/uploads/2017/07/Starbucks-Logo-PNG-File.png" alt=""/>

        <div className={CSS.loginBlock}>
            {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>  }

        </div>
    </header>

};

export default Header;