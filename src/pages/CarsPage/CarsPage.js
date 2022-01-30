import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllCars} from "../../store";
import {Car, Form} from "../../components";

import style from './CarsPage.module.css'

const CarsPage = () => {
    const dispatch = useDispatch();
    const {cars, status, error, reload} = useSelector(state => state['carsReduce'])
    useEffect(() => {
        dispatch(getAllCars())
    }, [reload])

    return (
        <div className={style.carsPage__main}>
            <div className={style.left__side}>
                <Form/>
            </div>
            <div className={style.right__side}>
                {error && <h2>{error}</h2>}
                {status === 'pending' && <h2>Loading...</h2>}
                {cars.map(car => <Car key={car.id} car={car}/>)}
            </div>
        </div>
    );
};

export {CarsPage};