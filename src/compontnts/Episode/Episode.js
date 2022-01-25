import React from 'react';
import {NavLink} from "react-router-dom";

import style from './Episode.module.css'

const Episode = ({episodes}) => {

    const {id, name, air_date, episode} = episodes;

    return (

            <div className={style.boxWthiEpisode}>
                <h2>{name}</h2>
                <p><strong>Air data:</strong> {air_date}</p>
                <p><strong>Episode:</strong>{episode}</p>
                <NavLink to={`/episodDetails`} state={episodes}>Episode Details</NavLink>


            </div>

    );
};

export {Episode};