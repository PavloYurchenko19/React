import React from 'react';


import './Post.css'

const Post = ({post: {id, userId, title, body}}) => {

    return (
        <div className={'post'}>

            <h2>{id}</h2>
            <h2>{userId}</h2>
            <h2>{title}</h2>
            <p>{body}</p>

        </div>
    );
};

export default Post;