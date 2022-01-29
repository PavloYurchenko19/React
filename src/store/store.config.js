import {configureStore} from "@reduxjs/toolkit";
import usersReduce from "./users.slice";

const store = configureStore({
    reducer:{
        usersReduce
    }
})
export default store