import React, {useEffect, useState} from 'react';

import style from './Posts.css'


import {postService} from "../../axios.service/post.service";
import Post from "../Post/Post";

const Posts = () => {

    const [posts, setPosts] = useState([])


    useEffect(() => {

        postService.getAll()
            .then(value => setPosts([...value]))

    }, [])


    return (
        <div className={style.posts}>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;