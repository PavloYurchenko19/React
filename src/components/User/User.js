import React from 'react';

const User = ({user}) => {
    const{id,name}=user
    return (
        <div>
            <h2>{id}</h2>
            <h2>{name}</h2>

        </div>
    );
};

export {User};