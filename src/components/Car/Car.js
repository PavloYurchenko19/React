import React from 'react';
import {carService} from "../../service/car.service";

const Car = ({car,setCar ,setUpdateCar}) => {

    const {model,id, price, year} = car;

const deleteCar = async () =>{
    await carService.delete(id)
    setCar({})
}

    return (
        <div>
            <p>{id}</p>
            <p>model : {model}</p>
            <p>Price : {price}</p>
            <p>Year : {year}</p>
            <button onClick={()=>setUpdateCar(car)}>Update</button>
            <button onClick={()=>deleteCar()}>Delete</button>

            <hr/>
        </div>
    );
};

export default Car;