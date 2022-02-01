import React from 'react';

const Cat = ({cat, dispatch}) => {
    return (
        <div>
            {cat.name}
            <button onClick={() => dispatch({type: 'deleteCat', payload: {id: cat.id}})}>Delete</button>

        </div>
    );
};

export {Cat};