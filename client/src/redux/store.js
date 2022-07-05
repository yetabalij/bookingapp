import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/searchSlice";
import partnersAuthReducer from "./features/Partners/partnersAuthSlice";
import propertyReducer from "./features/Properties/propertySlice";
import gustReducer from "./features/Gust/gustAuthSlice";

export const store = configureStore({
  reducer: {
    searchHotels: searchReducer,
    partnersAuth: partnersAuthReducer,
    properties: propertyReducer,
    gust: gustReducer,
  },
});
