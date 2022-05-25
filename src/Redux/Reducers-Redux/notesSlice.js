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
          headers: { authorization: encodedToken },
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
      console.log(data);
      return data;
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
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      notifyWarn(error.response.data.errors[0]);
    }
  }
);

export const deleteNote = createAsyncThunk(
  "notes/deleteNote",
  async (details, { rejectWithValue }) => {
    try {
      const { notesId } = details;
      const encodedToken = localStorage.get("token");
      const { data } = await axios.delete(`/api/notes/${notesId}`, {
        headers: { authorization: encodedToken },
      });
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      notifyWarn(error.response.data.errors[0]);
    }
  }
);

export const getAllArchives = createAsyncThunk(
  "notes/getAllArchives",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/api/archives");
      console.log(data);
      return data;
    } catch (error) {
      notifyWarn(error.response.data.errors[0]);
      console.log(error);
    }
  }
);

export const postNoteToArchive = createAsyncThunk(
  "notes/postNoteToArchive",
  async (details, { rejectWithValue }) => {
    try {
      const encodedToken = localStorage.get("token");
      const { noteId, note } = details;
      const { data } = await axios.post(
        `/api/archives/delete/${noteId}`,
        {
          note: note,
        },
        {
          headers: { authorization: encodedToken },
        }
      );
      console.log(data);
      return data;
    } catch (error) {
      notifyWarn(error.response.data.errors[0]);
      console.log(error);
    }
  }
);

export const restoreNoteFromArchive = createAsyncThunk(
  "notes/restoreNoteFromArchive",
  async (details, { rejectWithValue }) => {
    try {
      const encodedToken = localStorage.get("token");
      const { noteId, note } = details;
      const { data } = await axios.post(
        `/api/archives/restore/${noteId}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      );
      console.log(data);
      return data;
    } catch (error) {
      notifyWarn(error.response.data.errors[0]);
      console.log(error);
    }
  }
);

export const deleteFromArchive = createAsyncThunk(
  "notes/deleteFromArchive",
  async (details, { rejectWithValue }) => {
    try {
      const encodedToken = localStorage.get("token");
      const { noteId } = details;
      const { data } = await axios.delete(`/api/archives/delete/${noteId}`, {
        headers: { authorization: encodedToken },
      });
      console.log(data);
      return data;
    } catch (error) {
      notifyWarn(error.response.data.errors[0]);
      console.log(error);
    }
  }
);

// functions for the trash page

export const getAllTrash = createAsyncThunk(
  "notes/getAllTrash",
  async (_, { rejectWithValue }) => {
    try {
      const encodedToken = localStorage.getItem("token");
      const { data } = await axios.get(
        "/api/trash",
        {},
        {
          headers: { authorization: encodedToken },
        }
      );
      console.log(data);
      return data;
    } catch (error) {
      notifyWarn(error.response.data.errors[0]);
      console.log(error);
    }
  }
);

export const postNoteToTrash = createAsyncThunk(
  "notes/postNoteToTrash",
  async (details, { rejectWithValue }) => {
    try {
      const { noteId } = details;
      const encodedToken = localStorage.getItem("token");
      const { data } = await axios.post(
        `/notes/trash/${noteId}`,
        {},
        { headeres: { authorization: encodedToken } }
      );
      console.log(data);
      return data;
    } catch (error) {
      notifyWarn(error.response.data.errors[0]);
      console.log(error);
    }
  }
);

export const restoreNoteFromTrash = createAsyncThunk(
  "notes/restoreNoteFromTrash",
  async (details, { rejectWithValue }) => {
    try {
      const { noteId } = details;
      const encodedToken = localStorage.getItem("token");
      const { data } = await axios.post(
        `/api/trash/restore/${noteId}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      );
    } catch (error) {
      notifyWarn(error.response.data.errors[0]);
      console.log(error);
    }
  }
);

export const deleteNoteFromTrash = createAsyncThunk(
  "notes/deleteNoteFromTrash",
  async (details, { rejectWithValue }) => {
    try {
      const { noteId } = details;
      const encodedToken = localStorage.getItem("token");
      const { data } = await axios.delete(
        `/api/trash/delete/${noteId}`,
        {
          headers: { authorization: encodedToken },
        }
      );
    } catch (error) {
      notifyWarn(error.response.data.errors[0]);
      console.log(error);
    }
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
      })
      .addCase(postNote.pending, (state, action) => {})
      .addCase(postNote.fulfilled, (state, action) => {})
      .addCase(postNote.rejected, (state, action) => {});
  },
});
// export const {}=notesSlice.actions;
export default notesSlice.reducer;
