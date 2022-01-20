import React, {createContext, useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {carsService} from "../../service/cars.service";

const Form = ({getCar,removeCarId}) => {

    const {
        register,handleSubmit,formState:{errors}
    } = useForm();

    const [cars,setCars]=useState([])

    useEffect(()=>{
       carsService.getAll().then(value => setCars(value))
    },[])

    function send(data){
        console.log(data);
        carsService.create(data).then(value => {
            getCar(value)}).catch(error=>{
            console.log(error.response.data);

        } )

    }
    function removeCar(e){
        e.preventDefault()

    }
    let idFilter = cars.map(value => value.id);



    const updateCar = (car) => {

        carsService.updateById(car.id,car).then(value => {
            getCar(value)
            console.log(value)})
    };

    return (
        <div>
            <form onSubmit={handleSubmit(send)}>
                <div><label>Model : <input type="text" defaultValue={''} {...register('model')}/>  </label></div>
                <div><label>Price : <input type="text" defaultValue={''} {...register('price')}/> </label></div>
                <div><label>Year : <input type="text" defaultValue={''} {...register('year')}/> </label></div>
                <button>Send</button>
                <button onClick={removeCarId}>delete</button>
            </form>
            <form onSubmit={removeCar}>

            <div><label>Id : <input type="text"  name={'id'} value={''} onChange={idHendler}  />  </label></div>

            </form>
            {/*<form onSubmit={handleSubmit(updateCar)}>*/}
            {/*    <div><label>Id : <input type="text" defaultValue={''} {...register('id')}/>  </label></div>*/}

            {/*    <div><label>Model : <input type="text" defaultValue={''} {...register('model')}/>  </label></div>*/}
            {/*    <div><label>Price : <input type="text" defaultValue={''} {...register('price')}/> </label></div>*/}
            {/*    <div><label>Year : <input type="text" defaultValue={''} {...register('year')}/> </label></div>*/}
            {/*    <button>Update</button>*/}

            {/*</form>*/}
        </div>
    );
};

export {Form};