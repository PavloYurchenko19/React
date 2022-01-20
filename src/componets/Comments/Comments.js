import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";


import {commentService} from "../../axios.service/comment.service";
import {Comment} from "../Comment/Comment";

const Comments = () => {
    const {id} = useParams();

    const [comment, setComment] = useState([]);

    useEffect(() => {
        commentService.getAll()

            .then(value => {
                let filter = value.filter((element) => element.postId.toString() === id)
                setComment([...filter])

            });
    }, [id])
    return (
        <div>

            {comment && comment.map(comment => <Comment key={comment.id} comment={comment}/>)}

        </div>
    );
};

export {Comments};