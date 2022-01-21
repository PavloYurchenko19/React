import React from 'react';

const Photo = ({foto}) => {

    const {id, albumId, title, url, thumbnailUrl} = foto;

    return (
        <div>
            <h2>Album : {albumId}</h2>
            <h2>Number : {id}</h2>
            <h2>Title : {title}</h2>
            <p><img src={thumbnailUrl} alt={title}/>  </p>
        </div>
    );
};

export {Photo};