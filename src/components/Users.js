import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllUsers} from "../store/usres.slice";

function Users() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllUsers());
    }, [])
    const {users} = useSelector(state => state['userReducer']);
    console.log(users);
    return (

        <h2>[av</h2>

    )


}

export default Users;
