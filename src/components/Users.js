import {useEffect} from "react";
import {usersService} from "../services/users.service";

function Users() {
    useEffect(()=>{
        usersService.getAll().then(value => console.log(value) )
    },[])
    return(

    <h2>pavlo</h2>

    )


}

export default Users;
