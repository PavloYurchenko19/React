import React from 'react';
import {Link} from "react-router-dom";


import style from './Post.css'

const Post = ({post}) => {

    const {id, title} = post

    return (

        <div className={style.posts}>

            <h2>Post : {id}</h2>
            <Link to={id.toString()}><h2>{title}</h2></Link>

        </div>
    );
};

export default Post;