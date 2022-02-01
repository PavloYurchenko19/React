import {createSlice} from "@reduxjs/toolkit";

export const todoSlice =createSlice({
    name:"todoSlice",
    initialState:{
        todo:[],
        checkLine:[],
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

        changeStatus:(state,action)=>{
           let oneObject = state.todo.filter(value => value.id === action.payload.id)
           state.oneObject = !oneObject['checkValue']

        }
    }

})
const todoReducer = todoSlice.reducer
export const {addTodo,deleteTodo,changeStatus} = todoSlice.actions;
export default todoReducer