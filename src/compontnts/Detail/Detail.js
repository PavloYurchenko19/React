import React, {useEffect, useState} from 'react';

import style from './Detail.module.css'
const Detail = ({character}) => {
    const [characterHero, setCharacterHero] = useState({});

    useEffect(()=>{
        fetch(character).then(value => value.json()).then(value => setCharacterHero(value))
    },[])
    console.log(characterHero);

    return (
        <>
            <div className={style.boxDetail}>

            <img src={characterHero.image} alt=''/>
                <h2>{characterHero.name}</h2>
                <p><strong>Stauts:</strong> {characterHero.status}</p>
                <p><strong>Species:</strong> {characterHero.species}</p>
                <p><strong>Gender:</strong> {characterHero.gender}</p>
                {/*<p><strong>Origin:</strong> {characterHero.location.name}</p>*/}
                {/*<p><strong>Location:</strong> {characterHero.origin.name}</p>*/}
            </div>

        </>
    );
};

export {Detail};