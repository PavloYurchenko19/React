import './App.css';
import {Cars, Form} from "./components";
import {useState} from "react";

function App() {

    const [newCar,setNewCar] = useState(null)
    const [id,setId] = useState(null)


    const getCar = (car) => {
            setNewCar(car)
    };
    const removeCarId=(id)=>{
        setId(id)
    }

    return (
        <div>
            <Form getCar={getCar} removeCarId={removeCarId}/>
            <Cars newCar={newCar} removedCarId={id}/>
        </div>
    );
}


export default App;
