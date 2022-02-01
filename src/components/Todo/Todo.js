import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeStatus, deleteTodo} from "../../store";
import style from './Todo.module.css'

const Todo = ({todo}) => {
    const {id, name} = todo
    const dispatch = useDispatch();
    const {checkLine, ch} = useSelector(state => state['todoReducer'])
    console.log(checkLine );
    // console.log(checkLine[0].checkValue);


    return (
        <div className={style.todo__main}>
            <div className={checkLine ? style.line__through : style.line__through_less}>

                <input onClick={() => dispatch(changeStatus({id}))} type="checkbox" value={checkLine}/>
                {name}
            </div>
            <button onClick={() => dispatch(deleteTodo({id}))}>delete</button>

        </div>
    );
};

export {Todo};