import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//import axios from "axios";

export const searchResult = createAsyncThunk("search/result", async () => {
  //const {} = formValue;
  //   try {
  //     console.log("ok");
  //     const response = await axios.post("http://localhost:8000/api/search", {
  //       city: "city 5",
  //     });
  //     console.log(response.data);
  //     return response.data;
  //   } catch (err) {
  //     console.log(err);
  //   }
});

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchResult: null,
    error: "",
    loading: false,
  },
  reducers: {},
  extraReducers: {
    // [searchResult.pending]: (state, action) => {
    //   state.loading = true;
    // },
    // [searchResult.fulfilled]: (state, action) => {
    //   state.loading = false;
    //   state.searchResult = action.payload;
    // },
    // [searchResult.rejected]: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload.message;
    // },
  },
});

export default searchSlice.reducer;
