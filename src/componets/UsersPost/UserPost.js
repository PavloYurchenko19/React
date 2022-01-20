import React from 'react';


import style from './UserPost.module.css'

const UserPost = ({post: {id, userId, title, body}}) => {

    return (

        <div className={style.user__all_post}>

            <h2> user: {userId}< /h2>
            <h2> id: {id}< /h2>
            <h2> title {title}< /h2>
            <div>

                <p>{body}</p>
            </div>

        </div>
    );
};

export {UserPost};