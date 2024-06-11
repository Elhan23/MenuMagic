import { configureStore } from "@reduxjs/toolkit";
import PostUser from "../store/actions/PostUser/PostUser";
import { UserLogin } from "./actions/UserLogin/UserLogin";

export const store = configureStore({
  reducer: {
    user: PostUser,
    login: UserLogin,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(false),
});

export default store;
