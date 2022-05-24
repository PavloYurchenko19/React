import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAll} from "../store/posts.slice";

const Posts = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAll())

    }, [])
    const {posts} = useSelector(state => state['postReducer']);
    console.log(posts);

    return (
        <div>

        </div>
    );
};

export default Posts;
