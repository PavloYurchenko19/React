import React from 'react';
import {Link} from "react-router-dom";

const User = ({user}) => {

    const {id, name, username} = user;

    return (

        <div>

            {id}) {name} {username}
            <Link to={`${id.toString()}/albom`} state={user}>
                <button>Open albom</button>
            </Link>

            <Link to={`${id.toString()}/details`} state={user}>
                <button>Open UserDetails</button>
            </Link>
        </div>

    );
};

export {User};