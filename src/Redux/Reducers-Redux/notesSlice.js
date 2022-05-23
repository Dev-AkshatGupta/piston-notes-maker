import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {};

const getUsersData=createAsyncThunk()
const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder  
    
  },
});
