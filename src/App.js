import './App.css';
import {useReducer} from "react";
import {useForm} from "react-hook-form";

const reduce = (state,action) => {


};

function App() {
const [state,dispatch] = useReducer(reduce,{cat:'',dog:''})



    const submit = (e) => {
    e.preventDefault()
        console.log(e);


    }
    const cat = (cat) => {
        console.log(cat);
    }

    const dog = (dog) => {
      console.log(dog);
    }

    return (

      <div >
          <div>
              <form onSubmit={submit}>
                  <label> cat<input type="text" name={'cat'} value={''}  onChange={cat}/></label>
                  <button> send</button>
                  <label> dog<input type="text" name={'dog'} value={''} onChange={dog} /></label>
                  <button> send</button>
              </form>
          </div>

      </div>
  );
}

export default App;
