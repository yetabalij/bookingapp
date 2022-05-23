import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const searchHotels = createAsyncThunk(
  "search/result",
  async ({ formValue, navigate }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/search",
        formValue
      );
      navigate("/searchhotels");
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    Hotels: null,
    error: "",
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [searchHotels.pending]: (state, action) => {
      state.loading = true;
    },
    [searchHotels.fulfilled]: (state, action) => {
      state.loading = false;
      state.Hotels = action.payload;
    },
    [searchHotels.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default searchSlice.reducer;