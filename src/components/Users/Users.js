import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {User} from "../User/User";

const Users = () => {


 const {users,status} =  useSelector(state => state['usersReduce'])

console.log(users);

    return (
        <div>
            {users.map(user=><User key={user.id} user={user}  />)}
            Users

        </div>
    );
};

export {Users};