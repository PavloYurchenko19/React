import {createSlice} from "@reduxjs/toolkit";

export const todoSlice =createSlice({
    name:"todoSlice",
    initialState:{
        todo:[]
    },
    reducers:{

    }

})
const todoReducer = todoSlice.reducer
export default todoReducer