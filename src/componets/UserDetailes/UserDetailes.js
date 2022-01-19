import React, {useEffect, useState} from 'react';
import {Link, Outlet, useParams} from "react-router-dom";


import {userService} from "../../axios.service/user.service";
import style from './UserDetailes.module.css'

const UserDetailes = () => {


    const {id} = useParams();

    const [userDetail, setUserDetail] = useState(null);

    useEffect(() => {

        userService.getById(id)
            .then(userDetailes => setUserDetail({...userDetailes}))

    }, [id])


    return (

        <div className={style.users__right}>

            {userDetail && (

                <div>

                    <h2>{userDetail.id}</h2>
                    <h2>{userDetail.name} {userDetail.username}</h2>
                    <p>{userDetail.email}</p>
                    <p>{userDetail.address.street}</p>
                    <p>{userDetail.address.suite}</p>
                    <p>{userDetail.address.city}</p>
                    <p>{userDetail.address.zipcode}</p>
                    <p>Geo : </p>
                    <ul>
                        <li>{userDetail.address.geo.lat}</li>

                        <li>{userDetail.address.geo.lng}</li>
                    </ul>
                    <div>
                        <Link to={id.toString()}>
                            <button>Open posts</button>
                        </Link>
                    </div>

                </div>

            )}
            <div className={style.outlet}>

                <Outlet/>

            </div>
        </div>
    );
};

export default UserDetailes;