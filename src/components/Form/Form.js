import React, {useEffect, useState} from 'react';
import Users from "../Users/Users";

const Form = () => {

    const [form, setForm] = useState({name:'', age: 0});
    const [u, setU] = useState(null);
    const [a,setA] = useState(null)

    let user = {name:'pavlo'}


 console.log(form);
    function formHendler(e) {
        const eventData = {...form,[e.target.name]:e.target.value}
        setForm({...form, ...eventData})
        setU(user)


    }
    const send = (e) =>{
        e.preventDefault()
    }
    function get  () {
        let includes = u
        if(u.name){
            includes = u.name.includes(form.name.value);
        }
        setA(includes)


    }

    return (
        <div>
            <Users form={form}/>
            <form onSubmit={send}>
                <input type="text"  name={'name'} value={form.name} onChange={formHendler}/>
                <input type='number' name={'age'} value={form.age} onChange={formHendler}/>
                <button>Send</button>
            </form>
        </div>
    );
};

export default Form;