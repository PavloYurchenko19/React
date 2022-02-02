import {createSlice} from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: "createSlice",
    initialState: {
        todo: [],
    },

    reducers: {
        addTodo: (state, action) => {
            state.todo.push({
                id: new Date().getTime(),
                name: action.payload,
                status: false
            })
        },

        deleteTodo: (state, action) => {
            state.todo = state.todo.filter(value => value.id !== action.payload.id)
        },

        filterTodo: (state, action) => {
            const todo = state.todo.find(todo => todo.id === action.payload.id)
            todo.status = !todo.status
        }
    }

})

const todoReducer = todoSlice.reducer
export const {addTodo, deleteTodo, filterTodo} = todoSlice.actions
export default todoReducer