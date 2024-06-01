import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk(
  "user/getUser",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(process.env.USER_GET_ZAPROS);
      const jwtToken = res.headers.authorization;
      return { userData: res.data, jwtToken };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
