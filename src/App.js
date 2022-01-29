import React from 'react';
import Form from "./components/Form/Form";
import Animals from "./components/Animals/Animals";

const App = () => {

    // const getDispatch = (dispatch) => {
    //     console.log(dispatch);
    // }

    const getFromData = (data,dispatch) => {
        let animal = []
        animal = [...animal, {id: new Date().getTime(), ...data}]
        dispatch({type:"animal",payload: {...animal}})
        console.log(dispatch);
// dipatch

        // console.log(animal);
    };
    const getId = () => {
      
    }



    return (
        <div>
            <Form getFormData={getFromData} />
            <Animals getId={getId}/>
            
        </div>
    );
};

export default App;