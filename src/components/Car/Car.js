import React from 'react';

const Car = ({car}) => {
    const {id,model,price,year} = car
    return (
        <div>
            <h2>Id : {id}</h2>
            <h2>Model: {model}</h2>
            <h2>Price: {price}</h2>
            <h2>Year: {year}</h2>
        </div>
    );
};

export {Car};