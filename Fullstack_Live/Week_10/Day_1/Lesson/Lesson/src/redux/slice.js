import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const POST_URL = "https://jsonplaceholder.typicode.com/posts";

const initialState = {
    posts: [],
    status: "idle", // idle | pending | success | failed
    error: null,
};

// Thunk for fetching posts
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const response = await axios.get(POST_URL);
    return response.data; // Axios wraps data inside `data`
});

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        // Reducer for updating reactions
        reactionAdded(state, action) {
            const { postId, reaction } = action.payload;
            const existingPost = state.posts.find((post) => post.id === postId);
            if (existingPost) {
                existingPost.reactions[reaction]++; // Increment reaction count
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = "pending";
                state.error = null;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = "success";
                state.posts = action.payload.map((post) => ({
                    ...post,
                    reactions: {
                        thumbsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0,
                    },
                }));
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

// Export actions
export const { reactionAdded } = postSlice.actions;

// Export reducer
export default postSlice.reducer;
