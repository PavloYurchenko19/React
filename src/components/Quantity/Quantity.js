import React from 'react';
import {useSelector} from "react-redux";

const Quantity = () => {

    const {todo} = useSelector(state => state['todoReducer'])
    const checkTrue = todo.filter(value=> value.status === true);

    return (
        <div>
            <h2>All {todo.length} Completed {checkTrue.length}</h2>
        </div>
    );
};

export {Quantity};