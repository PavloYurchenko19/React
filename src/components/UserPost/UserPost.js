import React from 'react';


import style from './UserPost.module.css'

const UserPost = ({post}) => {

    const {id, userId, title, body} = post;

    return (
        <div className={style.userPost__main}>

            <div className={style.userPost}>
                <h2> User {userId}</h2>
                <h2> Post : {id}</h2>
                <h2>{title}</h2>
                <div>

                    <p>{body}</p>
                </div>
            </div>
        </div>
    );
};

export {UserPost};