import React from 'react';

const UserPost = ({post}) => {

    const {id, userId, title, body} = post;

    return (
        <div>
            <h2> User {userId}</h2>
            <h2> Post : {id}</h2>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    );
};

export {UserPost};