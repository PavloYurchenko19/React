import React from 'react';
import {Outlet, useLocation} from "react-router-dom";

import style from './EpisodeDetails.module.css'
import {Detail} from "../Detail/Detail";

const EpisodeDetails = () => {


    let {state} = useLocation();

    console.log(state);

    return (
        <>

            <div className={style.episodeDetails}>
                <div className={style.headerDetail}>

                    <h2>Episode number: {state.id}</h2>
                    <h2>Name: {state.name}</h2>
                    <p>Data: {state.air_date}</p>
                    <p>Episode: {state.episode}</p>
                </div>
                {state.characters.map(value => <Detail key={value.id} character={value}/>)}

                <Outlet/>

            </div>
        </>

    );
};

export {EpisodeDetails};