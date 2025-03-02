import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filterSlice.js";

const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
});

export default store;
