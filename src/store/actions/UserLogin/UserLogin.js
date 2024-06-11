import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const UserLogin = createAsyncThunk(
  "login/UserLogin",
  async ({ userData, navigate }, { rejectWithValue }) => {
    try {
      const params = new URLSearchParams();
      params.append("username", userData.username);
      params.append("password", userData.password);

      const res = await axios.post(
        "https://magicmenu-22e6224ad3f4.herokuapp.com/api/login",
        params,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      localStorage.setItem("access_token", res.data.tokens.access_token);

      navigate("/");

      return { userData: res.data };
    } catch (error) {
      console.error(
        "Login error:",
        error.response ? error.response.data : error.message
      );

      return rejectWithValue(error.response?.data?.message || "Error");
    }
  }
);
