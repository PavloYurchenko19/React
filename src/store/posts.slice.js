import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postService} from "../services/post.service";

export const getAll = createAsyncThunk(
    `postsSlice/getAll`,
    async (_, {dispatch}) => {
        await postService.getALL().then(value =>dispatch(getAllPosts({posts:value})));
    }
);

const PostsSlice = createSlice({
    name: "postSlice",
    initialState: {
        posts: []
    },
    reducers: {
        getAllPosts: (state, action) => {
            state.posts = action.payload.posts;
        }
    }
})
const postReducer = PostsSlice.reducer;
export const {getAllPosts} = PostsSlice.actions;
export default postReducer;
