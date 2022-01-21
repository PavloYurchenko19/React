import React, {useEffect, useState} from 'react';
import {Link, Outlet, useParams} from "react-router-dom";
import {postsService} from "../../service/posts.service";
import {PostDetail} from "../PostDetail/PostDetail";
import {Comments} from "../Comments/Comments";

const PostsDetails = () => {

    const [posts,setPosts] = useState({})


    const {id} = useParams();


    useEffect(()=>{
        postsService.getById(id)
            .then(value => setPosts({...value}))
    },[id])


    return (
        <div>
            <h2>User : {posts.userId}</h2>
            <h2> Id : {posts.id}</h2>
            <h2>Title : {posts.title}</h2>
            <p>{posts.body}</p>
            <Link to={`${id.toString()}/comment`}>
                <button>Open Comments</button>
            </Link>
            <Outlet/>



        </div>
    );
};

export {PostsDetails};