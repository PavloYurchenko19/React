import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";


import {carService} from "../../service/car.service";
import {joiResolver} from "@hookform/resolvers/joi";
import {CarValidator} from "../../validator/car.validator";

const Form = ({newCar, updateCar}) => {

    const {id, model, price, year} = updateCar;

    const [error, setError] = useState({})

    const {
        register,
        handleSubmit,
        setValue,
        formState: {errors}
    } = useForm({resolver: joiResolver(CarValidator), mode: 'onTouched'})

    useEffect(() => {
        setValue('model', model)
        setValue('price', price)
        setValue('year', year)
    }, [id])

    const submit = async (car) => {
        try {
            let createCar;
            if (id) {
                createCar = await carService.updateById(id, car);
            } else {

                createCar = await carService.create(car);
            }
            newCar(createCar)


        } catch (error) {
            setError(error.response.data)
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div><label>Model : <input type="text" defaultValue={''} {...register('model')}/></label></div>
                {errors.model && <span>{errors.model.message}</span>}
                <div><label>Price : <input type="text" defaultValue={''} {...register('price')}/></label></div>
                {errors.price && <span>{errors.price.message}</span>}
                <div><label>Year : <input type="text" defaultValue={''} {...register('year')} /></label></div>
                {errors.year && <span>{errors.year.message}</span>}
                <button>{id ? 'update' : 'create'}</button>
            </form>

        </div>
    );
};

export default Form;