import React, {useEffect, useState} from 'react';
import Users from "../Users/Users";

const Form = ({getFilter}) => {

    const [form,seForm] = useState({name:'',username:'', email: ''})

    function formHendler (e){
        const eventData = {...form, [e.target.name]: e.target.value};
        seForm({...form,...eventData})
        getFilter(eventData)
    }


    return (
        <div>
            <form>
                <input type="text" value={form.name} name={'name'} onChange={formHendler}/>
                <input type="text" value={form.username} name={'username'} onChange={formHendler}/>
                <input type="text" value={form.email} name={'email'} onChange={formHendler}/>
            </form>

        </div>
    );
};

export default Form;