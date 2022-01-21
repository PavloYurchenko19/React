import React from 'react';

const Comment = ({comment}) => {

    const {id, postId, name, body} = comment;
    return (
        <div>
            <h2> Post : {postId}</h2>
            <h2> Comment : {id}</h2>
            <h2>{name}</h2>
            <p>{body}</p>

        </div>
    );
};

export {Comment};