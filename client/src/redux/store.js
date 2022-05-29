import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/searchSlice";
import partnersAuthReducer from "./features/Partners/partnersAuthSlice";

export const store = configureStore({
  reducer: { searchHotels: searchReducer, partnersAuth: partnersAuthReducer },
});
