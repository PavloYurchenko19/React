import React, {useEffect, useState} from 'react';


import {userService} from "../../axios.service/user.service";
import {User} from "../index";

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        userService.getAll()
            .then(user => setUsers(user));

    }, [])
    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};