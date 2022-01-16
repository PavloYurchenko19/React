import React from 'react';


import Post from "../Post/Post";

const Posts = ({post}) => {

    return (
        <div>
            {post && post.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;