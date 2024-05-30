import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const getUser = createAsyncThunk(
  "user/getUser",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(process.env.USER_GET_ZAPROS);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
