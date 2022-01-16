import React from 'react';


import './UserDetail.css'


const UserDetail = ({
                        getPost,
                        userDetail: {
                            id,
                            name,
                            username,
                            email,
                            address: {street, suite, city, zipcode, geo: {lat, lng}}
                        }
                    }) => {


    return (
        <div className={'detail'}>
            <div>

                <h2>{id}</h2>
                <h3>{name}</h3>
                <h3>{username}</h3>
                <p>{email}</p>
                <p>{street}</p>
                <p>{suite}</p>
                <p>{city}</p>
                <p>{zipcode}</p>
                <p>Geo :</p>
                <ul>

                    <li>{lat}</li>
                    <li>{lng}</li>
                </ul>
            </div>

            <button onClick={() => getPost(id)}>Opent post</button>

        </div>
    );
};

export default UserDetail;