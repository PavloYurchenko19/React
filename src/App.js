import React, {useReducer} from 'react';

import {Cats, Dogs, Form} from "./components";
import './App.css'

const reducer = (state, action) => {
    switch (action.type) {
        case 'addCat':
            return {...state, cats: [...state.cats, {id: new Date().getTime(), name: action.payload}]}
        case 'addDog':
            return {...state, dogs: [...state.dogs, {id: new Date().getTime, name: action.payload}]}
        case 'deleteCat':
            return {...state, cats: state.cats.filter(cat => cat.id !== action.payload.id)}
        case 'deleteDog':
            return {...state, dogs: state.dogs.filter(dog => dog.id !== action.payload.id)}
    }
}

const App = () => {
    const [{cats, dogs}, dispatch] = useReducer(reducer, {cats: [], dogs: []})

    return (
        <div>
            <Form dispatch={dispatch}/>
            <div className={'animals'}>
                <Cats cats={cats} dispatch={dispatch}/>
                <Dogs dogs={dogs} dispatch={dispatch}/>
            </div>
        </div>
    );
};

export default App;