import React from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

const UserDeteils = () => {

    const {id} = useParams();

    const {state} = useLocation();

    return (
        <div>
            {state && (
                <div>
                    <h2>{state.id}</h2>
                    <div>
                        <h2>{state.name} {state.username}</h2>


                        <div>
                            <p>{state.email}</p>
                            <p>{state.address.street}</p>
                            <p>{state.address.suite}</p>
                            <p>{state.address.city}</p>
                            <p>{state.address.zipcode}</p>
                            <p>Geo : </p>
                            <ul>
                                <li>{state.address.geo.lat}</li>

                                <li>{state.address.geo.lng}</li>
                            </ul>
                        </div>
                        <div>
                            <Link to={`${id.toString()}/posts`} >
                                <button>Open posts</button>
                            </Link>
                        </div>
                    </div>


                </div>

            )}
            <Outlet/>

        </div>
    );
};

export {UserDeteils};