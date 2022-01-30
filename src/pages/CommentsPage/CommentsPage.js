import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Comment} from "../../components";
import {getAllComments} from "../../store";

const CommentsPage = () => {

    const dispatch = useDispatch();

   const {comments,status,error} = useSelector(state => state['commentsReduce'])
     useEffect(()=>{
        dispatch(getAllComments())
     },[])
    return (
        <div>
            {status === 'pending' && <h2>Loading...</h2> }
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}

        </div>
    );
};

export  {CommentsPage};