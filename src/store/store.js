import { configureStore } from "@reduxjs/toolkit";
import userReducer, { getUser } from "../store/actions/getUser/getUser";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(false),
});

export default store;
