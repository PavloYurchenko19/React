import React from 'react';

const Comment = ({comment}) => {

    const {id,name} = comment
    return (
        <div>
            <h2>{id}</h2>
            <h2>{name}</h2>

        </div>
    );
};

export {Comment};