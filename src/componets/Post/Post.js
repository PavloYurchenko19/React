import React from 'react';
import {Link} from "react-router-dom";


import style from './Post.module.css'

const Post = ({post}) => {

    const {id, title} = post

    return (

        <div className={style.posts}>

            <h2>Post : {id}</h2>
            <Link to={id.toString()}><h2>Open detaile : {title}</h2></Link>

        </div>
    );
};

export {Post};