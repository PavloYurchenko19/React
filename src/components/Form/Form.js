import React, {useRef} from 'react';

const Form = () => {
    const toDoInput = useRef();
    const submit = (e) => {
        e.preventDefault()
        e.target.reset()
        console.log(toDoInput.current.value);
    }
    return (
        <div>
            <form onSubmit={submit}>
                <input type="text" ref={toDoInput} placeholder={"toDo"} />
                <button>send</button>
            </form>

        </div>
    );
};

export {Form};