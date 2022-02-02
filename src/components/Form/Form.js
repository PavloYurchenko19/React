import React, {useRef} from 'react';
import {useDispatch} from "react-redux";

import {addTodo} from "../../store";

const Form = () => {

    const inputRef = useRef()
    const dispatch = useDispatch();
    const submit = (e) => {
        e.preventDefault()
        e.target.reset()
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input type="text" ref={inputRef} placeholder={'todo'}/>
                <button onClick={() => dispatch((addTodo(inputRef.current.value)))}>send</button>
            </form>
        </div>
    );
};

export {Form};