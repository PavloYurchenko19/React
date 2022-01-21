import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";


import {postsService} from "../../service/posts.service";
import {UserPost} from "../UserPost/UserPost";

const UsersPosts = () => {


    const [posts, setPosts] = useState(null);

    const {postId} = useParams();

    useEffect(() => {
        postsService.getByUserId(postId)
            .then(value => setPosts([...value]))
    }, [postId])

    return (
        <div>
            {posts && posts.map(post => <UserPost key={post.id} post={post}/>)}
        </div>
    );
};

export {UsersPosts};