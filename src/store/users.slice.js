import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {usersService} from "../service/users.service";

export const getAllUsers = createAsyncThunk(
    'userSlice/getAllUsers',
    async (_, {rejectWithValue}) => {
        try {
            const users = await usersService.getAll()
                return users
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const usersSlice = createSlice({
    name: 'userSlice',
    initialState: {
        users: [],
        status:null,
        error:null
    },
    reducers: {
        getAll: (state, action) => {
            state.users.push(action.payload)
        },
    },
    extraReducers: {
        [getAllUsers.pending]: (state, action) => {
            state.status = 'pending'
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.status='fulfilled'
            state.users = action.payload

        },
        [getAllUsers.rejected]: (state, action) => {
            state.status='rejected'
        }
    }
})
const usersReduce = usersSlice.reducer
export const {getAll} = usersSlice.actions;
export default usersReduce