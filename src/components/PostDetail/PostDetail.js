import React from 'react';

const PostDetail = ({post}) => {

    const {id, userId, title, body} = post;

    return (
        <div>

            <h2> user : {userId}</h2>
            <h2> post : {id}</h2>
            <h2> title : {title}</h2>
            <p>{body}</p>



        </div>
    );
};

export {PostDetail};