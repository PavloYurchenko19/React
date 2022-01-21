import React from 'react';

import style from "./Photo.module.css"

const Photo = ({foto}) => {

    const {id, albumId, title, url, thumbnailUrl} = foto;

    return (
        <div className={style.photo__main}>
            <div className={style.photo__box}>

                <h2>Album : {albumId}</h2>
                <h2>Number : {id}</h2>
                <h2>Title : {title}</h2>


            </div>
            <div>

                <p><img src={thumbnailUrl} alt={title}/></p>
            </div>
        </div>
    );
};

export {Photo};