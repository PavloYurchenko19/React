import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

const Loyout = () => {
    return (
        <div>

            <NavLink to={'/users' } >Users</NavLink>
            <NavLink to={'/posts' } >Posts</NavLink>
            <div>
            <Outlet/>
            </div>

        </div>
);
};

export {Loyout};