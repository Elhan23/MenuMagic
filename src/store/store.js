import { configureStore } from "@reduxjs/toolkit";
import { getUser } from "../store/actions/getUser/getUser";
import { GetChef } from "./actions/GetChef/GetChef";

export const store = configureStore({
  reducer: {
    user: getUser,
    chef: GetChef
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(false),
});

export default store;
