import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk(
  "user/getUser",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("http://localhost:8080/0");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message); 
    }
  }
);

