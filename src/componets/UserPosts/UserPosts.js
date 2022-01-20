import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";


import {postService} from "../../axios.service/post.service";
import {UserPost} from "../index";

const UserPosts = () => {

    const {id} = useParams();

    const [post, setPost] = useState([]);

    useEffect(() => {

        postService.getAll()
            .then(value => {
                let filter = value.filter((value) => value.userId.toString() === id);
                setPost(filter)
            })

    }, [])

    return (
        <div>
            {post && post.map(post => <UserPost key={post.id} post={post}/>)}
        </div>
    );
};

export {UserPosts};