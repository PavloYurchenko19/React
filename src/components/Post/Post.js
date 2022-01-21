import React from 'react';
import {Link} from "react-router-dom";

const Post = ({post}) => {
    const {id,  title, } = post;
    return (
        <div>

            {id}) {title}
            <Link to={`${id.toString()}/detail`} state={post}>
                <button>Open detail post</button>
            </Link>

        </div>
    );
};

export {Post};