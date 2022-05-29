import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const partnersRegister = createAsyncThunk(
  "partners/auth",
  async ({ formValue, navigate }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/partnerregister",
        formValue
      );
      navigate("/partnersdashboard");
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const partnersAuthSclise = createSlice({
  name: "partnersAuth",
  initialState: {
    Partners: null,
    error: "",
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [partnersRegister.pending]: (state, action) => {
      state.loading = true;
    },
    [partnersRegister.fulfilled]: (state, action) => {
      state.loading = false;
      state.Partners = action.payload;
    },
    [partnersRegister.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default partnersAuthSclise.reducer;
