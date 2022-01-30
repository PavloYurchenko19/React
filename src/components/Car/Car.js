import React from 'react';
import {useDispatch} from "react-redux";

import {deleteCar, getById} from "../../store";
import style from './Car.module.css'

const Car = ({car}) => {

    const {id, model, price, year} = car
    const dispatch = useDispatch();

    return (
        <div className={style.car__box}>
            <h2>Id : {id}</h2>
            <h2>Model: {model}</h2>
            <h2>Price: {price}</h2>
            <h2>Year: {year}</h2>
            <button onClick={() => dispatch(deleteCar({id}))}>Delete</button>
            <button onClick={() => dispatch(getById({id}))}>Update</button>
        </div>
    );
};

export {Car};