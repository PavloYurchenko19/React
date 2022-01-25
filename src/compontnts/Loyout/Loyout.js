import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import style from './Loyout.module.css'

const Loyout = () => {
    return (
        <div>
            <header className={style.header} >

                <NavLink to={"/episodes"}>Rik And Morty Episodes</NavLink>
            </header>

            <div className={style.outlet}>
                <div className={style.bgFotoRik}>
                    <img src="https://image.api.playstation.com/cdn/UP0151/CUSA09971_00/orSCY0z9Y6Ql1jmoMbD39ETO6HzddT3O.png?w=440&thumb=false" alt="Rick"/>
                </div>
                <Outlet/>
                <div className={style.bgFotoMorty}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFVw8ix4Ps38-Yt2exs0KhRQi0xLuxGyAH1A&usqp=CAU" alt="Morty"/>
                </div>
            </div>

        </div>
    );
};

export {Loyout};