import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";


import {commentsService} from "../../service/comments.service";
import {Comment} from "../Comment/Comment";

const Comments = () => {

    const {postId} = useParams();

    const [comments, setComments] = useState(null);

    useEffect(() => {
        commentsService.getById(postId)
            .then(value => setComments([...value]))
    }, [postId])

    return (
        <div>


            {comments && comments.map(comment => <Comment key={comment.id} comment={comment}/>)}

        </div>
    );
};

export {Comments};