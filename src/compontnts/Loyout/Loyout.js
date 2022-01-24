import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

const Loyout = () => {
    return (
        <div>
            <NavLink to={"/episodes"}>Episode</NavLink>
            <Outlet/>
        </div>
    );
};

export {Loyout};