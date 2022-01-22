import React, {useEffect, useState} from 'react';
import {carsService} from "../../service/cars.service";
import {Car} from "../Car/Car";

const Cars = ({newCar,setNewCar,setUpdateById}) => {

    const [cars, setCars] = useState([]);

    useEffect(()=>{
        carsService.getAll().then(value => setCars([...value]))
    },[newCar])

    return (

        <div>

            {cars.map(car=> <Car key={car.id} car={car} setNewCar={setNewCar} setUpdateById={setUpdateById}/>)}

        </div>
    );
};

export  {Cars}
