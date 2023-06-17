import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";

// store => global state that saves the entire info of our app
export const store = configureStore({
  // in most cases, we don't need all info, but just parts of it (in our case, only API)
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware)
})