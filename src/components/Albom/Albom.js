import React from 'react';
import {Link} from "react-router-dom";


import style from "./Albom.module.css";

const Albom = ({albom}) => {

    const {userId, id, title} = albom;

    return (
        <div>
            <div className={style.photo__box}>

                <h2>User {userId}</h2>
                <h2>id : {id}</h2>
                <h2>title : {title}</h2>

                <Link to={`${id.toString()}/photos`}>
                    <button>Open Foto</button>
                </Link>
            </div>
        </div>
    );
};

export {Albom};