import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  profilePosts: [],
  bookmark: [],
  currentPost: {},
  loadingStatus: false,
  editModalDisplay: false,
  editedPost:"",
  editPostId:"",
};
export const getAllPosts = createAsyncThunk("posts/getAllPosts", async () => {
  try {
    const { data } = await axios.get("/api/posts");
    return data.posts;
  } catch (error) {
    console.log(error.response);
  }
});

export const getProfilePosts = createAsyncThunk(
  "posts/getProfilePosts",
  async (username) => {
    try {
      const { data } = await axios.get(`/api/posts/user/${username}`);
      return data.posts;
    } catch (error) {
      console.log(error.response);
    }
  }
);

export const createPost = createAsyncThunk("posts/createPost", async (details) => {
  try {
    const encodedToken = localStorage.getItem("token");
 
    const { data } = await axios.post(
      "/api/posts/",
      { content: details.post,
        imageUrl:details.imageUrl 
      },
      { headers: { authorization: encodedToken } }
    );
    return data.posts;
  } catch (error) {
    console.log(error);
  }
});

export const editPost = createAsyncThunk(
  "posts/editPost",
  async (details) => {
    const {content, postId}=details;
    try {
      const encodedToken = localStorage.getItem("token");
      const { data } = await axios.post(
        `/api/posts/edit/${postId}`,
        { content: content },
        { headers: { authorization: encodedToken } }
      );
      return data.posts;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (postId) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const { data } = await axios.delete(`/api/posts/${postId}`, {
        headers: { authorization: encodedToken },
      });
     
      return data.posts;
    } catch (error) {
      console.log(error.response);
    }
  }
);

export const likePost = createAsyncThunk("posts/likePost", async (postId) => {
  try {
    const encodedToken = localStorage.getItem("token");
    const { data } = await axios.post(
      `/api/posts/like/${postId}`,
      {},
      { headers: { authorization: encodedToken } }
    );
    return data.posts;
  } catch (error) {
    console.log(error.response);
  }
});

export const disLikePost = createAsyncThunk(
  "posts/disLikePost",
  async (postId) => {
    try {
      const encodedToken = localStorage.getItem("token");
      const { data } = await axios.post(
        `/api/posts/dislike/${postId}`,
        {},
        { headers: { authorization: encodedToken } }
      );
      return data.posts;
    } catch (error) {
      console.log(error.response);
    }
  }
);

export const bookMark = createAsyncThunk("posts/bookMark", async (postId) => {
  try {
    const encodedToken = localStorage.getItem("token");
    const { data } = await axios.post(
      `/api/users/bookmark/${postId}`,
      {},
      { headers: { authorization: encodedToken } }
    );
    return data.bookmarks;
  } catch (error) {
    console.log(error.response);
  }
});

export const deleteBookMark = createAsyncThunk(
  "posts/deleteBookMark",
  async (postId) => {
    try {
      const encodedToken = localStorage.getItem("token");
      const { data } = await axios.post(
        `/api/users/remove-bookmark/${postId}`,
        {},
        { headers: { authorization: encodedToken } }
      );
      return data.bookmarks;
    } catch (error) {
      console.log(error.response);
    }
  }
);

export const getBookMarks = createAsyncThunk("posts/getBookMarks", async () => {
  try {
    const encodedToken = localStorage.getItem("token");
    const { data } = await axios.get(
      `/api/users/bookmark/`,
      {},
      { headers: { authorization: encodedToken } }
    );

    return data.bookmarks;
  } catch (error) {
    console.log(error.response);
  }
});

export const getAPost = createAsyncThunk("posts/getAPost", async (postId) => {
  try {
    const { data } = await axios.get(`/api/posts/${postId}`);

    return data.post;
  } catch (error) {}
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    changeModalDisplay(state,action) {
      state.editModalDisplay=!state.editModalDisplay;
      state.editPostId=action.payload;
    },
    editPostContent(state,action){
      state.editedPost=action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(getProfilePosts.fulfilled, (state, action) => {
        state.profilePosts = action.payload;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(likePost.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(disLikePost.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(editPost.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(getBookMarks.fulfilled, (state, action) => {
        state.bookmark = action.payload;
      })
      .addCase(bookMark.fulfilled, (state, action) => {
        state.bookmark = action.payload;
      })
      .addCase(deleteBookMark.fulfilled, (state, action) => {
        state.bookmark = action.payload;
      })
      .addCase(getAPost.pending, (state, action) => {
        state.loadingStatus = true;
      })
      .addCase(getAPost.fulfilled, (state, action) => {
        state.loadingStatus = false;
        state.currentPost = action.payload;
      });
  },
});
export const { changeModalDisplay,editPostContent } = postsSlice.actions;
export default postsSlice.reducer;
