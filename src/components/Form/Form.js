import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {createCar, updateCarById} from "../../store";

const Form = () => {

    const {
        handleSubmit,
        reset,
        register,
        setValue

    } = useForm();

    const {overRideCar} = useSelector(state => state['carsReduce'])
    const {id,model,price,year} = overRideCar
    console.log(overRideCar);
    useEffect(()=>{
        setValue('model',model)
        setValue('price',price)
        setValue('year',year)
    },[id])




const dispatch = useDispatch();

const submit = (data) => {
    if (id) {
        console.log({data});
        dispatch(updateCarById({id},{data}));
    } else {
        dispatch(createCar({data}));
    }
    reset()
}
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>Model: <input type="text" defaultValue={''} {...register('model')}/></label>
                <label>Price: <input type="number" defaultValue={''} {...register('price')}/></label>
                <label>Year: <input type="number" defaultValue={''} {...register('year')}/></label>
                <button>{id ? 'Update': 'Creat'}</button>
            </form>
        </div>
    );
};

export {Form};