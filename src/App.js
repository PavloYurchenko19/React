import './App.css';
import {useReducer} from "react";
import {useForm} from "react-hook-form";

const reduce = (state,action) => {


};

function App() {
const [state,dispatch] = useReducer(reduce,{cat:'',dog:''})
    let  {
handleSubmit,
        register
    }
        = useForm();

    const submit = (animal) => {
        if (animal.cat){
            dispatch({cat:animal.cat})
            console.log(animal.cat);
        }else if(animal.dog){
            dispatch({dog:animal.dog})
            console.log(animal.dog);
        }


    };

    return (

      <div>
          <div>
              <form onSubmit={handleSubmit(submit)}>
                  <label> cat<input type="text" defaultValue={''} {...register('cat')}/></label>
                  <button> send</button>
                  <label> dog<input type="text" defaultValue={''} {...register('dog')}/></label>
                  <button> send</button>
              </form>
          </div>

      </div>
  );
}

export default App;
