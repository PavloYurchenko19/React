import './App.css';
import Form from "./components/Form/Form";
import Users from "./components/Users/Users";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [users, setUser] = useState([])
    const [filterUsers, setFilterUsers] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(value => value.data)
            .then(value => {
                setUser([...value])
                setFilterUsers([...value])
            })
    }, [])

    function getFilter(data) {
        let filterArr = [...users]
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

    }

    return (
        <div>
            <Form getFilter={getFilter}/>
            <Users filterUsers={filterUsers}/>
        </div>
    );
}

export default App;
