import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import {postsService} from "../service/posts.service";

export const getAllPosts = createAsyncThunk(
    'postsSlice/getAllPosts',
    async (_,{rejectWithValue})=>{
        try {
           const posts = await postsService.getAll()
            return posts
        }catch (e) {

        }
    }
)

const postsSlice =createSlice({
    name:'postsSlice',
    initialState:{
        posts:[],
        status:null,
        error:null
    },
    reducers:{
        getAll:(state,action)=>{}
    },
    extraReducers:{
        [getAllPosts.pending]:(state,action)=>{
            state.status ='pending'
        },
        [getAllPosts.fulfilled]:(state,action)=>{
            state.status='fulfilled'
            state.posts = action.payload
        },
        [getAllPosts.rejected]:(state,action)=>{
            state.status='rejected'
        }
    }

})
const postsReduce = postsSlice.reducer;
export default postsReduce;