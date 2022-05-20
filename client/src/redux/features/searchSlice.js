import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const searchResult = createAsyncThunk(
  "search/result",
  async (formValue) => {
    //const {} = formValue;
    try {
      const response = await axios.post(
        "http://localhost:8000/api/search",
        formValue
      );
      //console.log(city);
      console.log(response);
      //     return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchResult: null,
    error: "",
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [searchResult.pending]: (state, action) => {
      state.loading = true;
    },
    [searchResult.fulfilled]: (state, action) => {
      state.loading = false;
      state.searchResult = action.payload;
    },
    [searchResult.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default searchSlice.reducer;
