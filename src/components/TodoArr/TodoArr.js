import React from 'react';
import {useSelector} from "react-redux";

import {Todo} from "../Todo/Todo";
import style from './TodoArr.module.css'

const TodoArr = () => {
    const {todo} = useSelector(state => state['todoReducer'])
    return (
        <div className={style.todo__main}>
            {todo.map(value => <Todo key={value.id} todo={value}/>)}
        </div>
    );
};

export {TodoArr};