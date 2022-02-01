import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeCheckBoxValue, deleteTodo} from "../../store";
import style from './Todo.module.css'

const Todo = ({todo}) => {
    const {id, name} = todo
    const dispatch = useDispatch();
    const {checkLine,ch} = useSelector(state => state['todoReducer'])
    // console.log(checkLine[0].checkValue);


    return (
        <div className={style.todo__main}>
            <div className={ch ? style.line__through : style.line__through_less}>

                <input onClick={() => dispatch(changeCheckBoxValue({id}))} type="checkbox" value={ch}/>
                {name}
            </div>
            <button onClick={() => dispatch(deleteTodo({id}))}>delete</button>

        </div>
    );
};

export {Todo};