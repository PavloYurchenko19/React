import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {User} from "../User/User";
import {getAllUsers} from "../../store";

const Users = () => {


 const {users,status} =  useSelector(state => state['usersReduce'])
const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllUsers())
    },[])

    return (
        <div>
            Users
            {users.map(user=><User key={user.id} user={user}  />)}

        </div>
    );
};

export {Users};