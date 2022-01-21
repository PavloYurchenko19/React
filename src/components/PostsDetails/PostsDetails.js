import React, {useEffect, useState} from 'react';
import {Link, Outlet, useParams} from "react-router-dom";


import style from './PostsDetail.module.css'
import {postsService} from "../../service/posts.service";

const PostsDetails = () => {

    const [posts, setPosts] = useState(null)

    const {id} = useParams();

    useEffect(() => {
        postsService.getById(id)
            .then(value => setPosts({...value}))
    }, [id])

    return (
        <div className={style.postPage__right_border}>
            {
                posts && (

                    <div className={style.postDetail__main}>
                        <h2>User : {posts.userId}</h2>
                        <h2> Id : {posts.id}</h2>
                        <h2>Title : {posts.title}</h2>
                        <p>{posts.body}</p>

                        <Link to={`${id.toString()}/comment`}>
                            <button>Open Comments</button>
                        </Link>

                    </div>
                )
            }
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {PostsDetails};