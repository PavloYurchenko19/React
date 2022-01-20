import React from 'react';
import {Link} from "react-router-dom";

import style from './User.module.css'

const User = ({user}) => {

    const {id, name} = user;

    return (
        <div className={style.user__box}>

            <Link to={id.toString()} state={user}>{id}) {name}</Link>

            <Link to={`${id.toString()}/albom`}>
                <button>Open Albom</button>
            </Link>

        </div>
    );
};

export {User};