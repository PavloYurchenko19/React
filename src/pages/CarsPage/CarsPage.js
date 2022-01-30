import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllCars} from "../../store";
import {Car, Form} from "../../components";
import {Outlet} from "react-router-dom";

const CarsPage = () => {
    const dispatch = useDispatch();
   const {cars,status,error} = useSelector(state => state['carsReduce'])
    useEffect(()=>{
        dispatch(getAllCars())
    },[])

    return (
        <div>
            <Form/>
            {status === 'pending' && <h2>Loading...</h2>}
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export {CarsPage};