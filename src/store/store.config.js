import {configureStore} from '@reduxjs/toolkit'
import userReducer from "./usres.slice";
import postReducer from "./posts.slice";
const store = configureStore({
    reducer:{
        userReducer,
        postReducer
    }
})

export default store;
