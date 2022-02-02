import React from 'react';
import {useSelector} from "react-redux";

import {Todo} from "../Todo/Todo";

const TodoArr = () => {

    const {todo} = useSelector(state => state['todoReducer'])

    return (
        <div>
            {todo.map(value => <Todo key={value.id} todo={value}/>)}
        </div>
    );
};

export {TodoArr};