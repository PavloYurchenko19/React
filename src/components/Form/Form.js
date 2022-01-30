import React from 'react';
import {useForm} from "react-hook-form";

const Form = () => {

const {
    handleSubmit,
    reset,
    register

} = useForm();

const submit = (data) => {

}
    return (
        <div>
            <form className={handleSubmit(submit)}>
                <label>Model: <input type="text" defaultValue={''} {...register('model')}/></label>
                <label>Price: <input type="text" defaultValue={''} {...register('price')}/></label>
                <label>Year: <input type="text" defaultValue={''} {...register('year')}/></label>
                <button>Send</button>
            </form>
        </div>
    );
};

export {Form};