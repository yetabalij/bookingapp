import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  searchResult: null,
  loading: false,
  error: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
});

export default searchSlice.reducer;
