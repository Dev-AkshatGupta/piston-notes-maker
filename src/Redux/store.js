import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Reducers-Redux/authSlice";
import usersReducer from "./Reducers-Redux/usersSlice";
import postReducer from "./Reducers-Redux/postsSlice";
import commentsReducer from "./Reducers-Redux/commentsSlice"
const store=configureStore({
    reducer:{
        auth:authReducer,
        users:usersReducer,
        posts:postReducer,
        comments:commentsReducer,
    }
});

export default store;