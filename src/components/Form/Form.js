import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {joiResolver} from "@hookform/resolvers/joi";


import {createCar, reloadPage, updateCarById} from "../../store";
import {CarValidator} from "../../validator/car.validator";
import style from './Form.module.css'

const Form = () => {

    const {
        handleSubmit,
        reset,
        register,
        setValue,
        formState: {errors}

    } = useForm({resolver: joiResolver(CarValidator), mode: 'onTouched'});

    const {overRideCar} = useSelector(state => state['carsReduce'])
    const {id, model, price, year, reload} = overRideCar

    useEffect(() => {
        setValue('model', model)
        setValue('price', price)
        setValue('year', year)
    }, [id, reload])

    const dispatch = useDispatch();

    const submit = async (data) => {
        await createCar(data)

        if (id) {
            await dispatch(updateCarById({id, data}));
        } else {
            await dispatch(createCar({data}));
        }
        await dispatch(reloadPage())
        await reset()
    }
    return (
        < >
            <form className={style.form} onSubmit={handleSubmit(submit)}>
                <label>Model: <input type="text" defaultValue={''} {...register('model')}/></label>
                {errors.model && <span> {errors.model.message}</span>}
                <label>Price: <input type="number" defaultValue={''} {...register('price')}/></label>
                {errors.price && <span> {errors.price.message}</span>}
                <label>Year: <input type="number" defaultValue={''} {...register('year')}/></label>
                {errors.year && <span> {errors.year.message}</span>}
                <button>{id ? 'Update' : 'Creat'}</button>
            </form>
        </>
    );
};

export {Form};