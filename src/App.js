import './App.css';
import {useReducer, useState} from "react";
import {useForm} from "react-hook-form";
import Animals from "./components/Animals/Animals";

const reduce = (state,action) => {


    console.log(state);

switch (action.type){
    case 'cat':

        return {...state, cat: action.payload};
    case 'dog':
        return {...state, dog: action.payload};
    default:
        return state
}


};

function App() {
    const [state,dispatch] = useReducer(reduce,{cat:'', dog: ''})

// console.log(state);
    function submit(e) {
        e.preventDefault();
        // console.log(e.target.name.value);
    }

    function animal(e) {
       let data =  {...state,[e.target.name]:e.target.value}
        // console.log(data.cat);
       dispatch({type:'cat', payload:data.cat})
       dispatch({type:'dog',payload:data.dog})

    }


    return (

      <div >
          <div>
              <form onSubmit={submit}>
                  <label>cat <input type="text" name={'cat'} value={state.cat.value} onChange={animal}/></label>
                  <button >save</button>
                  <label>dog <input type="text" name={'dog'} value={state.dog.value} onChange={animal}/></label>
                  <button>save</button>
              </form>





          </div>

      </div>
  );
}

export default App;
