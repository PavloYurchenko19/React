import './App.css';
import Users from "./componens/Users/Users";
import Form from "./componens/Form/Form";

import {useEffect, useState} from "react";

function App() {

    const [users, setUsers] = useState([]);
    const [filterUsers, setFilterUsers] = useState([]);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                    setUsers([...value])
                    setFilterUsers([...value])
                }
            )


    }, [])

    const getFilter = (data) => {

        let filterArr = [...users];

        if (data.name) {
            filterArr = filterArr.filter(user => user.name.toLowerCase().includes(data.name.toLowerCase()))
        }

        if (data.username) {
            filterArr = filterArr.filter(user => user.username.toLowerCase().includes(data.username.toLowerCase()))
        }

        if (data.email) {
            filterArr = filterArr.filter(user => user.email.toLowerCase().includes(data.email.toLowerCase()))
        }

        setFilterUsers(filterArr)
    };

    return (
        <div>

            <Form getFilter={getFilter}/>

            <Users users={filterUsers}/>

        </div>
    );
}

export default App;
