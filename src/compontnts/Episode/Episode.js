import React from 'react';
import {NavLink} from "react-router-dom";

const Episode = ({episodes}) => {

    const {id, name, air_date, episode} = episodes;

    return (
        <div>
            {id}
            {name}
            {air_date}
            {episode}
            <NavLink to={`${id.toString()}/episodDetails`} >Episode Details</NavLink>


        </div>
    );
};

export {Episode};