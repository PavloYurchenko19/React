import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postService} from "../../axios.service/post.service";

const UserPosts = () => {

    const {id} = useParams();

    const [post, setPost] = useState(null);

    useEffect(()=>{
        postService.getById(id)
            .then(value => setPost({...value}))


    },[])

    return (
        <div>
            {post && (<div >
                    {post.userId}
                    {post.id}
                    {post.title}
                    {post.body}
                </div>

            )}
        </div>
    );
};

export default UserPosts;