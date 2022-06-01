import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/searchSlice";
import partnersAuthReducer from "./features/Partners/partnersAuthSlice";
import propertyReducer from "./features/Properties/propertySlice";

export const store = configureStore({
  reducer: {
    searchHotels: searchReducer,
    partnersAuth: partnersAuthReducer,
    properties: propertyReducer,
  },
});
