import React, {useEffect, useState} from 'react';
import {carService} from "../../service/car.service";
import Car from "../Car/Car";


const Cars = ({setCar,setUpdateCar,car}) => {

    const [cars,setCars] =useState([])

  useEffect(()=>{
      carService.getAll()
          .then(value =>setCars(value) )
  },[car])
    console.log(cars);

    return (
        <div>
            {cars.map(car=> <Car key={car.id} car={car} setCar={setCar} setUpdateCar={setUpdateCar}/>)}
        </div>
    );
};

export default Cars;