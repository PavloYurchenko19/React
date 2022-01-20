import React, {useEffect, useState} from 'react';

import {postService} from "../../axios.service/post.service";
import {Post} from "../index";
import style from './Posts.module.css'

const Posts = () => {

    const [posts, setPosts] = useState([])


    useEffect(() => {

        postService.getAll()
            .then(value => setPosts([...value]))

    }, [])


    return (
        <div className={style.post}>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};