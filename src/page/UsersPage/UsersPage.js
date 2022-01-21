import React from 'react';
import {Outlet} from "react-router-dom";
import {Users} from "../../components";

const UsersPage = () => {
    return (
        <div>
            <Users/>
            <div>
                <Outlet/>
            </div>

        </div>
    );
};

export {UsersPage};