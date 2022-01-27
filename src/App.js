import './App.css';
import {useReducer} from "react";

const reducer = (state, action) => {

    switch (action.type) {
        case 'inc1':
            return {...state, count1: state.count1 + 1}
        case 'dec1':
            return {...state, count1: state.count1 - 1}
        case 'reset1':
            return {...state, count1: action.payload}
        case 'inc2':
            return {...state, count2: state.count2 + 1}
        case 'dec2':
            return {...state, count2: state.count2 - 1}
        case 'reset2':
            return {...state, count2: action.payload}
        case 'inc3':
            return {...state, count3: state.count3 + 1}
        case 'dec3':
            return {...state, count3: state.count3 - 1}
        case 'reset3':
            return {...state, count3: action.payload}
        default:
            throw new Error('MyError')
    }


};


function App() {

    const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 1, count3: 2});

    return (
        <div>
            <h2>Counter1: {state.count1}</h2>
            <h2>Counter2: {state.count2}</h2>
            <h2>Counter3: {state.count3}</h2>

            <div>
                <button onClick={() => dispatch({type: 'inc1'})}>inc for count1</button>
                <button onClick={() => dispatch({type: 'dec1'})}>dec for count1</button>
                <button onClick={() => dispatch({type: 'reset1', payload: 1})}>reset for count1</button>
            </div>
            <div>
                <button onClick={() => dispatch({type: 'inc2'})}>inc for count2</button>
                <button onClick={() => dispatch({type: 'dec2'})}>dec for count2</button>
                <button onClick={() => dispatch({type: 'reset2', payload: 2})}>reset for count2</button>
            </div>
            <div>
                <button onClick={() => dispatch({type: 'inc3'})}>inc for count3</button>
                <button onClick={() => dispatch({type: 'dec3'})}>dec for count3</button>
                <button onClick={() => dispatch({type: 'reset3', payload: 3})}>reset for count3</button>
            </div>
        </div>
    );
}

export default App;
