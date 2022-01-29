import React, {useReducer} from 'react';
import {useForm} from "react-hook-form";
import Animals from "../Animals/Animals";

const reducer = (state, action) => {
    switch (action.type) {
        case 'animal':
            return {...state, cat: action.payload}
        default:
            return state
    }

};


const Form = ({getFormData}) => {

    const [state, dispatch] = useReducer(reducer, {cat: '', dog: ''});

    const {
        register, handleSubmit, reset
    } = useForm();

    const submit = (data) => {

        getFormData(data, dispatch);
        reset()
    }


    return (
        <div>

            <form onSubmit={handleSubmit(submit)}>
                <label>Cat: <input type="text" defaultValue={''} {...register('cat')}/></label>
                <button>save</button>
                <label>Dog: <input type="text" defaultValue={''} {...register('dog')}/></label>
                <button>save</button>
            </form>
            <Animals state={state}/>
        </div>
    );
};

export default Form;