import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllUsers} from "../../store";
import {User} from "../../components";
import style from './UsersPage.module.css'

const UsersPage = () => {

    const {users, status, error} = useSelector(state => state['usersReduce'])

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    return (
        <div>
            {status === 'pending' && <h2>Loading...</h2>}
            <div className={style.users__main}>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
        </div>
    );
};

export {UsersPage};