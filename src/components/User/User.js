import React from 'react';
import {Link} from "react-router-dom";


import style from './User.module.css'

const User = ({user}) => {

    const {id, name, username} = user;

    return (

        <div className={style.user__main}>
            <div className={style.user}>
                {id}) {name} {username}
            </div>

            <div className={style.button__user}>

                <Link to={`${id.toString()}/albom`} state={user}>
                    <button>Open albom</button>
                </Link>

                <Link to={id.toString()} state={user}>
                    <button>Open UserDetails</button>
                </Link>
            </div>
        </div>
    );
};

export {User};