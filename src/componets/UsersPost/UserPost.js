import React from 'react';

const UserPost = ({post: {id, userId, title, body}}) => {

    return (

        <div>

            <h2> user: {userId}< /h2>
            <h2> id: {id}< /h2>
            <h2> title {title}< /h2>
            <p>{body}</p>

        </div>
    );
};

export default UserPost;