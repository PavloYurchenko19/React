import React, {useEffect, useState} from 'react';
import {Link, Outlet, useParams} from "react-router-dom";


import {postService} from "../../axios.service/post.service";
import style from './PostDetail.module.css'

const PostDetail = () => {

    const {id} = useParams();

    const [postDetail, setPostDetail] = useState(null);

    useEffect(() => {

        postService.getById(id)
            .then(post => setPostDetail({...post}))

    }, [id])

    return (
        <div>
            {
                postDetail && (

                    <div className={style.post__detail}>

                        <h2>{postDetail.userId}</h2>
                        <h2>{postDetail.id}</h2>
                        <h2>{postDetail.title}</h2>
                        <p>{postDetail.body}</p>

                        <div>

                            <Link to={id.toString()}>
                                <button>Open Comments</button>
                            </Link>

                        </div>
                    </div>
                )
            }
            <Outlet/>

        </div>

    );
};

export default PostDetail;