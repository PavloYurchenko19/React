import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";


import style from './UserDetail.module.css'

const UserDeteils = () => {

    const [user, setUser] = useState(null)

    const {id} = useParams();

    const {state} = useLocation();
    useEffect(() => {
        setUser(state)
    }, [id])

    return (
        <div>
            {user && (
                <div className={style.border}>

                    <div className={style.userDetail__main}>

                        <h2>{user.id}</h2>
                        <div>
                            <h2>{user.name} {user.username}</h2>

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
                            <div>
                                <Link to={`${id.toString()}/posts`}>
                                    <button>Open posts</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Outlet/>
                    </div>
                </div>
            )}
            <div>
            </div>
        </div>
    );
};

export {UserDeteils};