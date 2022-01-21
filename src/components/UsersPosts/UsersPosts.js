import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";


import {postsService} from "../../service/posts.service";
import {UserPost} from "../UserPost/UserPost";

const UsersPosts = () => {


    const [posts, setPosts] = useState([] );

    const {id} = useParams();

    useEffect(()=>{
    postsService.getById(id)
        .then(value => setPosts([value]))
    },[id])

    return (
        <div>
            {  posts.map(post => <UserPost key={post.id} post={post}/>)}

        </div>
    );
};

export  {UsersPosts};