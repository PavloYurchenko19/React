import React, {useRef} from 'react';

const Form = ({dispatch}) => {

    const catInput = useRef();
    const dogInput = useRef();

    const submit = (e) => {
        e.preventDefault()
        e.target.reset()
    }

    return (
        <div>
            <form onSubmit={submit}>
                <label>Cats: <input type="text" ref={catInput}/></label>
                <button onClick={() => dispatch({type: 'addCat', payload: catInput.current.value})}>Sent</button>
                <label>Dogs: <input type="text" ref={dogInput}/></label>
                <button onClick={() => dispatch({type: 'addDog', payload: dogInput.current.value})}>Sent</button>
            </form>


        </div>
    );
};

export {Form};