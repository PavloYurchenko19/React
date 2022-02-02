import React from 'react';
import {useDispatch} from "react-redux";

import {deleteTodo, filterTodo} from "../../store";
import style from './Todo.module.css'

const Todo = ({todo}) => {

    const {id, name, status} = todo;

    const dispatch = useDispatch();

    return (
        <div className={style.main__todo}>
            <div className={style.one__todo}>

                <input type="checkbox" value={status} onChange={() => dispatch(filterTodo({id}))}/>
                <div className={status ? style.line__through : style.line__through_less}>
                    {name}
                </div>

                <button onClick={() => {
                    dispatch(deleteTodo({id}))
                }}>Delete
                </button>
            </div>
        </div>
    );
};

export {Todo};