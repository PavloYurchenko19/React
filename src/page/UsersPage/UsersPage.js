import React from 'react';
import {Outlet} from "react-router-dom";


import style from './UsersPage.module.css'
import {Users} from "../../components";

const UsersPage = () => {
    return (
        <div className={style.users__page_main}>
            <div className={style.left__side_userPage}>

                <Users/>
            </div>
            <div className={style.right__side_userPage}>
                <Outlet/>
            </div>

        </div>
    );
};

export {UsersPage};