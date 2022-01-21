import React from 'react';
import {Link} from "react-router-dom";


import style from './Post.module.css'

const Post = ({post}) => {

    const {id, userId, title,} = post;

    return (
        <div className={style.post__main}>

            {id}) {title}
            <div>

                <Link to={`${id.toString()}/detail`} state={post}>
                    <button>Open detail post</button>
                </Link>
            </div>
        </div>
    );
};

export {Post};