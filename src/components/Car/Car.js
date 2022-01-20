import React from 'react';

const Car = ({car}) => {
    const {id, model, price, year} = car;
    return (
        <div>
            <h2>id: {id}</h2>
            <p>Model: {model}</p>
            <p>Price: {price}</p>
            <p>Year: {year}</p>
            <hr/>
        </div>
    );
};

export  {Car};