import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAllUsers} from "../../store";
import {User} from "../../components";

const UsersPage = () => {

  const {users,status,error} = useSelector(state => state['usersReduce'])

    const dispatch = useDispatch();
  useEffect(()=>{
     dispatch(getAllUsers())
  },[])

    return (
        <div>
            {status === 'pending' && <h2>Loading...</h2>}
            {users.map(user=><User key={user.id} user={user} />)}

        </div>
    );
};

export {UsersPage};