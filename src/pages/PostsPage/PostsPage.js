import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllPosts} from "../../store";
import {Post} from "../../components";

const PostsPage = () => {

    const {posts, status, error} = useSelector(state => state['postsReduce'])
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllPosts())
    }, [])
    return (
        <div>
            
            {status === 'pending' && <h2>Loading...</h2>}
            {posts.map(post => <Post key={post.id} post={post}/>)}

        </div>
    );
};

export {PostsPage};