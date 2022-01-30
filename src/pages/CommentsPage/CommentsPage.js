import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Comment} from "../../components";
import {getAllComments} from "../../store";
import style from './CommentsPage.module.css'

const CommentsPage = () => {

    const dispatch = useDispatch();

    const {comments, status, error} = useSelector(state => state['commentsReduce'])
    useEffect(() => {
        dispatch(getAllComments())
    }, [])

    return (
        <div className={style.comment__main}>
            {status === 'pending' && <h2>Loading...</h2>}
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {CommentsPage};