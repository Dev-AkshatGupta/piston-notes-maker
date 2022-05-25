import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { notifyError, notifyInfo, notifyWarn } from "Utilities/Notifications";
const initialState = {
  currentUser: {},
  loadingStates: {
    getUserDataLoading: false,
  },
  allNotes: [],
};

export const getUsersData = createAsyncThunk(
  "notes/getUserData",
  async (_, { rejectWithValue }) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const { data } = await axios.get(
        "/api/user",
        {},
        {
          headers: { authoriazation: encodedToken },
        }
      );
      console.log(data);
      return data.user;
    } catch (error) {
      notifyWarn(error.response.data.errors[0]);
      console.log(error.response);
    }
  }
);

export const getAllNotes = createAsyncThunk(
  "notes/getAllNotes",
  async (_, { rejectWithValue }) => {
    try {
      const encodedToken = localStorage.getItem("token");
      const { data } = await axios.get(
        "/api/notes",
        {},
        {
          headers: { authorization: encodedToken },
        }
      );
    } catch (error) {
      notifyError(error.response.data.errors[0]);
      console.log(error.response);
    }
  }
);

export const postNote = createAsyncThunk(
  "notes/postNote",
  async (details, { rejectWithValue }) => {
    try {
      const encodedToken = localStorage.getItem("token");
      const note = details;
      const { data } = await axios.post(
        "/api/notes",
        { note: note },
        {
          headers: { authorization: encodedToken },
        }
      );
      console.log(data);
      return data;
    } catch (error) {
      notifyError(error.response.data.errors[0]);
      console.log(error.response);
    }
  }
);

export const editNote = createAsyncThunk(
  "notes/editNote",
  async (details, { rejectWithValue }) => {
    const { notesId } = details;
    try {
      const encodedToken = localStorage.getItem("token");
      const { data } = await axios.post(
        `/api/notes/${notesId}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      );
    } catch (error) {}
  }
);

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsersData.pending, (state) => {
        state.loadingStates.getUserDataLoading = true;
      })
      .addCase(getUsersData.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.loadingStates.getUserDataLoading = false;
      })
      .addCase(getUsersData.rejected, (state, action) => {
        state.currentUser = action.payload;
        state.loadingStates.getUserDataLoading = false;
      })
      .addCase(getAllNotes.pending, (state, action) => {
        state.loadingStates.getAllNotesLoading = true;
      })
      .addCase(getAllNotes.fulfilled, (state, action) => {
        state.loadingStates.getAllNotesLoading = false;
        state.allNotes = action.payload;
      })
      .addCase(getAllNotes.rejected, (state, action) => {
        state.loadingStates.getAllNotesLoading = false;
      });
  },
});
// export const {}=notesSlice.actions;
export default notesSlice.reducer;
