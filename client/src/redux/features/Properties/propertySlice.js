import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createHotel = createAsyncThunk(
  "create/hotel",
  async ({ formValue, navigate }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/hotels/createhotel",
        formValue,
        { withCredentials: true }
      );
      navigate("/partnersdashboard");
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const partnerProperty = createAsyncThunk(
  "partner/property",
  async (formValue) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/hotels/propertybypartner",
        formValue,
        { withCredentials: true }
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const propertySlice = createSlice({
  name: "property",
  initialState: {
    Property: null,
    error: "",
    loading: "",
  },
  reducers: {
    setPartnerProperty: (state, action) => {
      state.Property = action.payload;
    },
    clearPartnerProperty: (state, action) => {
      localStorage.clear();
      state.Property = null;
    },
  },
  extraReducers: {
    [createHotel.pending]: (state, action) => {
      state.loading = true;
    },
    [createHotel.fulfilled]: (state, action) => {
      state.loading = false;
      //localStorage.setItem("property", JSON.stringify({ ...action.payload }));
      state.Property = action.payload;
    },
    [createHotel.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    [partnerProperty.pending]: (state, action) => {
      state.loading = true;
    },
    [partnerProperty.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem(
        "partnerProperty",
        JSON.stringify({ ...action.payload })
      );
      state.Property = action.payload;
    },
    [partnerProperty.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export const { setPartnerProperty, clearPartnerProperty } =
  propertySlice.actions;
export default propertySlice.reducer;
