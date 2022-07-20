import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const partnersRegister = createAsyncThunk(
  "partners/auth",
  async ({ formValue, navigate }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/partnerregister",
        formValue,
        { withCredentials: true }
      );
      navigate("/createproperty");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const partnersLogin = createAsyncThunk(
  "partners/login",
  async ({ formValue, navigate }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/partnerlogin",
        formValue,
        { withCredentials: true }
      );
      navigate("/partnersdashboard");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
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
  reducers: {
    setPartnerUser: (state, action) => {
      state.Partners = action.payload;
    },
    setPartnerLogout: (state, action) => {
      localStorage.removeItem("partnerProfile");
      state.Partners = null;
    },
  },
  extraReducers: {
    [partnersRegister.pending]: (state, action) => {
      state.loading = true;
    },
    [partnersRegister.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem(
        "partnerProfile",
        JSON.stringify({ ...action.payload })
      );
      state.Partners = action.payload;
    },
    [partnersRegister.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [partnersLogin.pending]: (state, action) => {
      state.loading = true;
    },
    [partnersLogin.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem(
        "partnerProfile",
        JSON.stringify({ ...action.payload })
      );
      state.Partners = action.payload;
    },
    [partnersLogin.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export const { setPartnerLogout, setPartnerUser } = partnersAuthSclise.actions;
export default partnersAuthSclise.reducer;
