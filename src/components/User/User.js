import React from 'react';

import style from './User.module.css'

const User = ({user}) => {

    return (
        <div className={style.user__box}>
            <div className={style.header}>
                <h2>{user.id}</h2>
                <h2>{user.name} {user.username}</h2>
            </div>
            <div>
                <p>{user.email}</p>
                <p>{user.address.street}</p>
                <p>{user.address.suite}</p>
                <p>{user.address.city}</p>
                <p>{user.address.zipcode}</p>
                <p>Geo : </p>
                <ul>
                    <li>{user.address.geo.lat}</li>

                    <li>{user.address.geo.lng}</li>
                </ul>
            </div>
        </div>
    );
};

export {User};