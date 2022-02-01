import React from 'react';

const Dog = ({dog, dispatch}) => {
    return (
        <div>
            {dog.name}
            <button onClick={() => dispatch({type: 'deleteDog', payload: {id: dog.id}})}>Delete</button>
        </div>
    );
};

export {Dog};