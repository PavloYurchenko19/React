import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {createCar} from "../../store";

const Form = () => {

    const {overRideCar} = useSelector(state => state['carsReduce'])
    console.log(...overRideCar);


const {
    handleSubmit,
    reset,
    register

} = useForm();

const dispatch = useDispatch();

const submit = (data) => {
dispatch(createCar({data}))
    reset()
}
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>Model: <input type="text" defaultValue={''} {...register('model')}/></label>
                <label>Price: <input type="text" defaultValue={''} {...register('price')}/></label>
                <label>Year: <input type="text" defaultValue={''} {...register('year')}/></label>
                <button>{.id ? 'Update':'Create'}</button>
            </form>
        </div>
    );
};

export {Form};