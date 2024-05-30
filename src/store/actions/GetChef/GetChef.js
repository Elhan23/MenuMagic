import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetChef = createAsyncThunk(
  "chef/GetChef", 
    async (_, {rejectWithValue}) => {
       try {
          const res = await axios.get(process.env.USER_GET_ZAPROS)
          return res.data
       } catch {
          return rejectWithValue("Error");
       }
    }
);
