import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

const Loyout = () => {
    return (
        <div>
            <NavLink to={'/'} >Home</NavLink>
            <NavLink to={'/users'} >Users</NavLink>
            <NavLink to={'/posts'} >Posts</NavLink>
            <Outlet/>

        </div>
    );
};

export  {Loyout};