import React from 'react';

const Car = ({car}) => {
    const {id, model, price, year} = car;
    return (
        <div>
            <h2>{id}</h2>
            <p>{model}</p>
            <p>{price}</p>
            <p>{year}</p>
        </div>
    );
};

export  {Car};