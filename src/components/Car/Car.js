import React from 'react';
import {carsService} from "../../service/cars.service";

const Car = ({car,setNewCar,setUpdateById}) => {
    const {id, model, price, year} = car;

    const deleteCar = async () =>{
        await carsService.deleteById(id)
        setNewCar({})
    }
    return (
        <div>
            <h2>id: {id}</h2>
            <p>Model: {model}</p>
            <p>Price: {price}</p>
            <p>Year: {year}</p>
            <button onClick={()=>deleteCar()}>Delete</button>
            <button onClick={()=>setUpdateById(car)}>Update</button>
            <hr/>
        </div>
    );
};

export  {Car};