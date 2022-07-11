import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const gustRegister = createAsyncThunk(
  "gust/auth",
  async ({ formValue, navigate }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/register",
        formValue,
        { withCredentials: true }
      );
      navigate("/");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const gustSignIn = createAsyncThunk(
  "gust/signin",
  async ({ formValue, navigate }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        formValue,
        { withCredentials: true }
      );
      navigate("/");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const gustAuthSlice = createSlice({
  name: "gustAuth",
  initialState: {
    Gust: null,
    loading: false,
    error: "",
  },
  reducers: {
    setGustLogout: (state, action) => {
      localStorage.clear();
      state.Gust = null;
    },
  },
  extraReducers: {
    [gustRegister.pending]: (state, action) => {
      state.loading = true;
    },
    [gustRegister.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = "";
      localStorage.setItem(
        "gustProfile",
        JSON.stringify({ ...action.payload })
      );
      state.Gust = action.payload;
    },
    [gustRegister.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    //Gust SignIn
    [gustSignIn.pending]: (state, action) => {
      state.loading = true;
    },
    [gustSignIn.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = "";
      localStorage.setItem(
        "gustProfile",
        JSON.stringify({ ...action.payload })
      );
      state.Gust = action.payload;
    },
    [gustSignIn.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export const { setGustLogout } = gustAuthSlice.actions;
export default gustAuthSlice.reducer;
