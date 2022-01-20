import React from 'react';

const User = ({user:{username,name,email}}) => {


    return (
        <div>
            {name}----{username}----{email}
            
        </div>
    );
};

export default User;