import React, {useEffect, useState} from 'react';
import {carsService} from "../../service/cars.service";
import {Car} from "../Car/Car";

const Cars = ({newCar,removedCarId}) => {

    const [cars, setCars] = useState([]);

    useEffect(()=>{
        carsService.getAll().then(value => setCars([...value]))
        console.log(removedCarId);

    },[newCar,removedCarId])

    return (

        <div>

            {cars.map(car=> <Car key={car.id} car={car}/>)}

        </div>
    );
};

export  {Cars}
