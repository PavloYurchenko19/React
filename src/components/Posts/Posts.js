import React, {useEffect, useState} from 'react';
import {postsService} from "../../service/posts.service";
import {Post} from "../Post/Post";

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        postsService.getAll()
            .then(value=>setPosts(value))
    },[])


    return (
        <div>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }

        </div>
    );
};

export {Posts};