import React from 'react';

const Comment = ({comment: {id, postId, name, email, body}}) => {
    return (
        <div>
            <h2> Post : {postId}</h2>
            <h2>id : {id}</h2>
            <p>{name}</p>
            <p>{email}</p>
            <p>{body}</p>
        </div>
    );
};

export default Comment;