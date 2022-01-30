import React from 'react';
import style from './Post.module.css'

const Post = ({post}) => {

    const {userId, id, title, body} = post;

    return (
        <div className={style.posts}>
            <h2>User: {userId}</h2>
            <h2>Post: {id}</h2>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    );
};

export {Post};