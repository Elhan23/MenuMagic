import { configureStore } from "@reduxjs/toolkit";
import { getUser } from "../store/slice/getUser/getUser";

export const store = configureStore({
  reducer: {
    user: getUser,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(false),
});

export default store;
