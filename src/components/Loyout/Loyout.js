import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import style from './Loyout.module.css'

const Loyout = () => {
    return (
        <div>
            <nav>
                <NavLink to={'/usersPage'}>Users Page </NavLink>
                <NavLink to={'/postsPage'}>Posts Page</NavLink>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/commentsPage'}>Comments Page</NavLink>
                <NavLink to={'/carsPage'}>Cars Page</NavLink>
            </nav>
            <Outlet/>

        </div>
    );
};

export  {Loyout};