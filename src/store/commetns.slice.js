import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import {commnetsService} from "../service/commnets.service";

export const getAllComments = createAsyncThunk(
    'commentsSlice/getAllComments',
    async (_,{rejectWithValue})=>{
        try {
            const comments =  await commnetsService.getAll()
            return comments
        }catch (e) {
            return rejectWithValue(e.message)
        }

    }
)

const commentsSlice = createSlice({
    name:'commentsSlice',
    initialState:{
        comments:[],
        status:null,
        error:null
    },
    extraReducers:{
        [getAllComments.pending]:(state,action)=>{
            state.state = 'pending'

        },
        [getAllComments.fulfilled]:(state,action)=>{
            state.state = 'fulfilled'
            state.comments = action.payload
        },
        [getAllComments.rejected]:(state,action)=>{
            state.state = 'rejected'

        }
    }
})
const commentsReduce = commentsSlice.reducer;
export default commentsReduce;