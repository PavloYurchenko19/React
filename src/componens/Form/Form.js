import React, {useState} from 'react';

const Form = ({getFilter}) => {

    const [form, setForm] = useState({name: '', username: '', email: ''});


    const formHendler = (e) => {

        const eventData = {...form, [e.target.name]: e.target.value}
        setForm({...form, ...eventData})
    }

    let onSumb = (e) => {

        getFilter(form)
        e.preventDefault()

    };

    return (
        <div>
            <form>

                <label>Name : <input type="text" name={'name'} value={form.name} onChange={formHendler}/></label>
                <label>Username : <input type="text" name={'username'} value={form.username} onChange={formHendler}/></label>
                <label>Email : <input type="text" name={'email'} value={form.email} onChange={formHendler}/></label>
                <button onClick={onSumb}>check</button>

            </form>
        </div>
    );
};

export default Form;