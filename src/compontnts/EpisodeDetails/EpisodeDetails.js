import React from 'react';
import {Outlet, useLocation} from "react-router-dom";

import style from './EpisodeDetails.module.css'
import {Detail} from "../Detail/Detail";

const EpisodeDetails = () => {

    let {state} = useLocation();

    return (
        <>
            <div className={style.headerDetail}>
            <h2>Episode number: {state.id}</h2>
            <h2>Name: {state.name}</h2>
            <p>Data: {state.air_date}</p>
            <p>Episode: {state.episode}</p>
        </div>

            <div className={style.episodeDetails}>

                {state.characters.map(value =>  <Detail key={value} character={value}/>)}

                <Outlet/>
            </div>
        </>
    );
};

export {EpisodeDetails};