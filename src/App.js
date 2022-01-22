import './App.css';
import Cars from "./components/Cars/Cars";
import Form from "./components/Form/Form";
import {useState} from "react";
import {carService} from "./service/car.service";

function App() {

    const [car, setCar] = useState({});
    const [updateCar, setUpdateCar] = useState({});




    return (
        <div>
            <Form newCar={setCar}  updateCar={updateCar}/>
            <Cars setCar={setCar} car={car} setUpdateCar={setUpdateCar} />
        </div>
    );
}

export default App;
