import {createSlice} from "@reduxjs/toolkit";

export const todoSlice =createSlice({
    name:"todoSlice",
    initialState:{
        todo:[],
        checkLine:[],
        ch:false
    },
    reducers:{
        addTodo:(state,action)=>{
            state.todo.push({
                id:new Date().getTime(),
                name:action.payload.todoElement,
                checkValue:false
            })
        },
        deleteTodo:(state,action)=>{
            state.todo = state.todo.filter(value=>value.id !== action.payload.id)
        },
        changeCheckBoxValue:async (state,action)=>{
            state.todo = state.todo.filter(value=>value.id === action.payload.id)


        }
    }

})
const todoReducer = todoSlice.reducer
export const {addTodo,deleteTodo,changeCheckBoxValue} = todoSlice.actions;
export default todoReducer