import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import {usersService} from "../service/users.service";

export const getAllUsers = createAsyncThunk(
    'userSlice/getAllUsers',
    async (_,{dispatch})=>{
        try {
            const users = await usersService.getAll()
            dispatch(getAll({users}))

        }catch (e){

        }
    }
)

const usersSlice = createSlice({
    name:'userSlice',
    initialState:{
        users:[]
    },
    reducers:{
        getAll:(state,action)=>{
          state.users.push(action.payload.users)
        },
    },
    extraReducers:{
    []
    }
})
const usersReduce = usersSlice.reducer
export const {getAll} = usersSlice.actions;
export default usersReduce