import React, {createContext, useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {carsService} from "../../service/cars.service";

const Form = ({setNewCar,updateById}) => {
    const [formError, setFormError] = useState({})

    const {id, model, year, price} = updateById;
    const {
        register,handleSubmit,formState:{errors},setValue
    } = useForm();

    const [cars,setCars]=useState([])

    useEffect(()=>{
        setValue('model',model)
        setValue('year',year)
        setValue('price',price)
    },[id])

    useEffect(()=>{
       carsService.getAll().then(value => setCars(value))
    },[])


    const send = async (car)=>{
        try {
            let newCar;
            if (id){
                 newCar = await carsService.updateById(id,car);
            }else {

                newCar= await carsService.create(car)
            }
            setNewCar(newCar)
        }catch (error){
            setFormError(error.response.data)
        }
    }






    return (
        <div>
            <form onSubmit={handleSubmit(send)}>
                <div><label>Model : <input type="text" defaultValue={''} {...register('model')}/>  </label></div>
                <div><label>Price : <input type="text" defaultValue={''} {...register('price')}/> </label></div>
                <div><label>Year : <input type="text" defaultValue={''} {...register('year')}/> </label></div>
                <button>{id?'Update':"Create"}</button>
            </form>


        </div>
    );
};

export {Form};