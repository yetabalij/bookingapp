import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const gustRegister = createAsyncThunk(
  "gust/auth",
  async ({ formValue, navigate }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/register",
        formValue,
        { withCredentials: true }
      );
      navigate("/");
      return response.data;
    } catch (error) {
      console.log(error);
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
  reducers: {},
  extraReducers: {
    [gustRegister.pending]: (state, action) => {
      state.loading = true;
    },
    [gustRegister.fulfilled]: (state, action) => {
      state.loading = false;
      state.loading = false;
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
  },
});

export default gustAuthSlice.reducer;
