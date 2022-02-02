import React, {useRef} from 'react';
import {useDispatch} from "react-redux";

import {addTodo} from "../../store";
import style from './Form.module.css'

const Form = () => {
    const dispatch = useDispatch();
    const toDoInput = useRef();
    const submit = (e) => {
        e.preventDefault()
        e.target.reset()
    }

    return (
        <div className={style.form}>
            <form onSubmit={submit}>
                <input type="text" ref={toDoInput} placeholder={"toDo"}/>
                <button onClick={() => dispatch(addTodo({todoElement: toDoInput.current.value}))}>send</button>
            </form>
        </div>
    );
};

export {Form};