import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';


import style from "./Layout.module.css";

const Layout = () => {
    return (
        <div className={style.layout__main}>
            <div className={style.header}>

                <NavLink to="/posts">Post</NavLink>
                <NavLink to="/users">User</NavLink>

            </div>
            <Outlet/>

        </div>
    );
};

export default Layout;