import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";
import {commentsService} from "../../service/comments.service";
import {Comment} from "../Comment/Comment";

const Comments = () => {

    const {id} = useParams();

    const [comments, setComments] = useState(null);
    console.log(id);

    useEffect(()=>{
        commentsService.getById(id)
            .then(value => setComments([...value]))
    },[id])
    console.log(comments);

    return (
        <div>


            {comments && comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            <Outlet/>

        </div>
    );
};

export {Comments};