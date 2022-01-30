import React from 'react';

import style from './Comment.module.css'

const Comment = ({comment}) => {

    const {postId, body, id, name} = comment

    return (

        <div className={style.comment}>
            <h2>post: {postId}</h2>
            <h2>Comment: {id}</h2>
            <h2>{name}</h2>
            <p>{body}</p>
        </div>
    );
};

export {Comment};