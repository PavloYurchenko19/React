import React, {useEffect, useState} from 'react';
import {Link, Outlet, useParams} from "react-router-dom";


import {userService} from "../../axios.service/user.service";
import style from './UserDetailes.module.css'

const UserDetailes = () => {


    const {id} = useParams();
    const [userDetail, setUserDetail] = useState(null);
    useEffect(()=>{
       userService.getById(id)
           .then(userDetailes => setUserDetail({...userDetailes}) )
    },[id])



    return (
        <div className={style.users__right}>
            {userDetail &&(
            <div><h2>{userDetail.id}</h2>
                <h2>{userDetail.name} {userDetail.username}</h2>
                {userDetail.email}
                {userDetail.address.street}
                {userDetail.address.suite}
                {userDetail.address.city}
                {userDetail.address.zipcode}
                {userDetail.address.geo.lat}
                {userDetail.address.geo.lng}
                <div>
                    <Link to={id.toString()}>
                        <button>Open posts</button>
                    </Link>
                </div>

            </div>

            )}
            <div>

                <Outlet/>
            </div>
        </div>
    );
};

export default UserDetailes;