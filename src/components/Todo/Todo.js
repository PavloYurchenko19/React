import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeCheckBoxValue, deleteTodo} from "../../store";
import style from './Todo.module.css'

const Todo = ({todo}) => {
    const {id, name} = todo
    const dispatch = useDispatch();
    const {checkLine} = useSelector(state => state['todoReducer'])
    let f = checkLine[0]
  const{check,setCheck} = useState(false)

    const {checkValue} = f
    useEffect(()=>{
        setCheck(!checkValue)
    },[checkValue])
    console.log(checkValue);
    return (
        <div className={style.todo__main}>
            <div className={check ? style.line__through : style.line__through_less}>

                <input onClick={() => dispatch(changeCheckBoxValue({id}))} type="checkbox" value={checkValue}/>
                {name}
            </div>
            <button onClick={() => dispatch(deleteTodo({id}))}>delete</button>

        </div>
    );
};

export {Todo};