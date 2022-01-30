import React from 'react';

const Post = ({post}) => {
    const {id,title} = post;
    return (
        <div>
            <h2>{id}</h2>
            <h2>{title}</h2>

        </div>
    );
};

export {Post};