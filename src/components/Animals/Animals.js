import React from 'react';

const Animals = ({cat, dog}) => {

    return (
        <div>
            <h3> cat {cat}</h3>
            <h3> dog {dog}</h3>
        </div>
    );
};

export default Animals;