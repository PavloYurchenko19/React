import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {usersService} from "../services/users.service";

export const getAllUsers = createAsyncThunk(
    `userSlice/getAllUsers`,
    async(_, {dispatch})=>{
        try {
            const users = await usersService.getAll();
            dispatch(getAll({users}))
        }catch (e){
            console.log(e);
        }
    }
);
const userSlice = createSlice({
   name:'userSlice',
   initialState:{
       users: []

   },
    reducers:{
        getAll:(state ,action) =>{
            state.users = action.payload.users
        }
    }
})

const userReducer = userSlice.reducer;
export const {getAll} = userSlice.actions;
export default userReducer;
