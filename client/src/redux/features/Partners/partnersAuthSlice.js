import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const partnersAuthSclise = createSlice({
  name: "partnersAuth",
  initialState: {
    Partners: null,
    error: "",
    loading: false,
  },
  reducers: {},
  extraReducers: {},
});

export default partnersAuthSclise.reducer;
