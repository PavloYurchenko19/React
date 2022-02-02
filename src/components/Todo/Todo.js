import React, {useRef, useState} from 'react';
import {useDispatch} from "react-redux";

import {deleteTodo} from "../../store";
import style from './Todo.module.css'

const Todo = ({todo}) => {

    const [boolValue, setBoolValue] = useState(false);

    const {id, name} = todo
    const dispatch = useDispatch();
    const checkBoxRef = useRef();

    const changeCheckbox = (data) => {
        setBoolValue(data)
    }

    return (
        <div className={style.todo__main}>
            <input type="checkbox" ref={checkBoxRef} aria-checked={"false"}
                   onClick={() => changeCheckbox(checkBoxRef.current.checked)}/>
            <div className={boolValue ? style.line__through : style.line__through_less}>
                {name}
            </div>
            <button onClick={() => dispatch(deleteTodo({id}))}>delete</button>
        </div>
    );
};

export {Todo};