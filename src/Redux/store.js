import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Reducers-Redux/authSlice";
import notesReducer from "./Reducers-Redux/notesSlice";
const store=configureStore({
    reducer:{
        auth:authReducer,
        notes:notesReducer
    }
});

export default store;