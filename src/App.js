import './App.css';
import {Cars, Form} from "./components";
import {useState} from "react";

function App() {

    const [newCar,setNewCar] = useState(null)
    const [updateById,setUpdateById] = useState({})



    return (
        <div>
            <Form setNewCar={setNewCar} updateById={updateById}/>
            <Cars newCar={newCar} setNewCar={setNewCar} setUpdateById={setUpdateById}/>
        </div>
    );
}


export default App;
