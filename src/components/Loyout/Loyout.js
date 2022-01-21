import React from 'react';
import {NavLink, Outlet} from "react-router-dom";


import style from './Loyout.module.css'

const Loyout = () => {
    return (
        <div>

            <div className={style.header}>
                <div className={style.header__link}>

                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt=""/>
                    <NavLink to={'/users'}>Users</NavLink>
                </div>

                <div className={style.header__link}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIHexW-8n7cYh2LVTo7ngju6Getn8PBIo6yw&usqp=CAU"
                        alt=""/>

                    <NavLink to={'/posts'}>Posts</NavLink>

                </div>
            </div>

            <div>
                <Outlet/>
            </div>

        </div>
    );
};

export {Loyout};