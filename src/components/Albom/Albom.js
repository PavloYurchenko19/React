import React from 'react';
import {Link} from "react-router-dom";

const Albom = ({albom}) => {

    const {userId, id, title} = albom;

    return (
        <div>
            <h2>User {userId}</h2>
            <h2>id : {id}</h2>
            <h2>title : {title}</h2>
            <Link to={`${id.toString()}/photos`}>
                <button>Open Foto</button>
            </Link>
        </div>
    );
};

export {Albom};