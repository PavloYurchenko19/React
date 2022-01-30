import React from 'react';
import {useDispatch} from "react-redux";
import {deleteCar, updateCarById} from "../../store";

const Car = ({car}) => {
    const {id,model,price,year} = car
    const dispatch = useDispatch();
    return (
        <div>
            <hr/>
            <h2>Id : {id}</h2>
            <h2>Model: {model}</h2>
            <h2>Price: {price}</h2>
            <h2>Year: {year}</h2>
            <button onClick={()=>dispatch(deleteCar({id}))}>Delete</button>
            <button onClick={()=>dispatch(updateCarById({id}))}>Update</button>
        </div>
    );
};

export {Car};