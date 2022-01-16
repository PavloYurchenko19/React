import React, {useEffect, useState} from 'react';


import {userService} from "../../services/user.service";
import User from "../User/User";

const Users = ({getDetail}) => {

    let [users, setUsers] = useState([]);

    useEffect(() => {

        userService.getAll()
            .then(value => setUsers(value))

    }, [])

    return (
        <div>
            {users.map(value => <User getDetail={getDetail} key={value.id} user={value}/>)}
        </div>
    );
};

export default Users;