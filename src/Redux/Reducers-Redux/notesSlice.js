import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Note } from "Components";
import { notifyError, notifyWarn } from "Utilities/Notifications";

const initialState = {
  currentUser: {},
  loadingStates: {
    getUserDataLoading: false,
  },
  allNotes: [],
  modalDisplay: false,
  archive: [],
  trash: [],
};
// Please ignore all the consoles on the page these all the functions need to be checked

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
      const { data } = await axios.get("/api/notes", {
        headers: { authorization: encodedToken },
      });
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

      const { data } = await axios.post(
        "/api/notes",
        { note: details },
        {
          headers: { authorization: encodedToken },
        }
      );
      return data;
    } catch (error) {
      notifyError(error.response.data.errors[0]);
      console.log(error.response);
    }
  }
);

// This is yet to do
export const editNote = createAsyncThunk(
  "notes/editNote",
  async (details, { rejectWithValue }) => {
    const { notesId,note } = details;
    try {
      const encodedToken = localStorage.getItem("token");
      const { data } = await axios.post(
        `/api/notes/${notesId}`,
        {note:note},
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

      const encodedToken = localStorage.getItem("token");
      const { data } = await axios.delete(`/api/notes/${notesId}`, {
        headers: { authorization: encodedToken },
      });

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
      const encodedToken = localStorage.getItem("token");
      const { data } = await axios.get("/api/archives", {
        headers: { authorization: encodedToken },
      });
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
      const encodedToken = localStorage.getItem("token");
      const { notesId, note } = details;
      const { data } = await axios.post(
        `/api/notes/archives/${notesId}`,
        {
          note: note,
        },
        {
          headers: { authorization: encodedToken },
        }
      );
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
      const encodedToken = localStorage.getItem("token");
      const { notesId } = details;
      const { data } = await axios.post(
        `/api/archives/restore/${notesId}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      );
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
      const encodedToken = localStorage.getItem("token");
      const { notesId } = details;
      const { data } = await axios.delete(`/api/archives/delete/${notesId}`, {
        headers: { authorization: encodedToken },
      });
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
      const { data } = await axios.get("/api/trash", {
        headers: { authorization: encodedToken },
      });
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
      const { notesId, note } = details;
      const encodedToken = localStorage.getItem("token");
      const { data } = await axios.post(
        `/api/notes/trash/${notesId}`,
        { note: note },
        { headers: { authorization: encodedToken } }
      );
      return data;
    } catch (error) {
      notifyWarn(error.response.data.errors[0]);
      console.log(error.response.data.errors[0]);
    }
  }
);

export const restoreNoteFromTrash = createAsyncThunk(
  "notes/restoreNoteFromTrash",
  async (details, { rejectWithValue }) => {
    try {
      const { notesId } = details;
      const encodedToken = localStorage.getItem("token");
      const { data } = await axios.post(
        `/api/trash/restore/${notesId}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      );
      return data;
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
      const { notesId } = details;
      const encodedToken = localStorage.getItem("token");
      const { data } = await axios.delete(`/api/trash/delete/${notesId}`, {
        headers: { authorization: encodedToken },
      });
      return data;
    } catch (error) {
      notifyWarn(error.response.data.errors[0]);
      console.log(error);
    }
  }
);

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    displayModal(state) {
      state.modalDisplay = !state.modalDisplay;
    },
  },
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
        state.allNotes = action.payload.notes;
      })
      .addCase(getAllNotes.rejected, (state, action) => {
        state.loadingStates.getAllNotesLoading = false;
      })
      .addCase(postNote.pending, (state, action) => {})
      .addCase(postNote.fulfilled, (state, action) => {
        state.allNotes = action.payload.notes;
      })
      .addCase(postNote.rejected, (state, action) => {})
      .addCase(editNote.pending, (state, action) => {})
      .addCase(editNote.fulfilled, (state, action) => {})
      .addCase(editNote.rejected, (state, action) => {})
      .addCase(deleteNote.pending, (state, action) => {})
      .addCase(deleteNote.fulfilled, (state, action) => {
        state.allNotes = action.payload.notes;
      })
      .addCase(deleteNote.rejected, (state, action) => {})
      .addCase(getAllArchives.pending, (state, action) => {})
      .addCase(getAllArchives.fulfilled, (state, action) => {
        state.archive = action.payload.archives;
      })
      .addCase(getAllArchives.rejected, (state, action) => {})
      .addCase(postNoteToArchive.pending, (state, action) => {})
      .addCase(postNoteToArchive.fulfilled, (state, action) => {
        state.archive = action.payload.archives;
        state.allNotes = action.payload.notes;
      })
      .addCase(postNoteToArchive.rejected, (state, action) => {})
      .addCase(restoreNoteFromArchive.pending, (state, action) => {})
      .addCase(restoreNoteFromArchive.fulfilled, (state, action) => {
        state.archive = action.payload.archives;
        state.allNotes = action.payload.notes;
      })
      .addCase(restoreNoteFromArchive.rejected, (state, action) => {})
      .addCase(deleteFromArchive.pending, (state, action) => {})
      .addCase(deleteFromArchive.fulfilled, (state, action) => {
        state.archive = action.payload.archives;
      })
      .addCase(deleteFromArchive.rejected, (state, action) => {})
      .addCase(getAllTrash.pending, (state, action) => {})
      .addCase(getAllTrash.fulfilled, (state, action) => {
        state.trash = action.payload.trash;
      })
      .addCase(getAllTrash.rejected, (state, action) => {})
      .addCase(postNoteToTrash.pending, (state, action) => {})
      .addCase(postNoteToTrash.fulfilled, (state, action) => {
        state.trash = action.payload.trash;
        state.allNotes = action.payload.notes;
      })
      .addCase(postNoteToTrash.rejected, (state, action) => {})
      .addCase(restoreNoteFromTrash.pending, (state, action) => {})
      .addCase(restoreNoteFromTrash.fulfilled, (state, action) => {
        state.trash = action.payload.trash;
        state.allNotes = action.payload.notes;
      })
      .addCase(restoreNoteFromTrash.rejected, (state, action) => {})
      .addCase(deleteNoteFromTrash.pending, (state, action) => {})
      .addCase(deleteNoteFromTrash.fulfilled, (state, action) => {
        state.trash = action.payload.trash;
      })
      .addCase(deleteNoteFromTrash.rejected, (state, action) => {});
  },
});

export const { displayModal } = notesSlice.actions;

export default notesSlice.reducer;
