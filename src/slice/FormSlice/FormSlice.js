// src/slices/formSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Асинхронный thunk для регистрации пользователя
export const registerUser = createAsyncThunk(
  "registration/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:8080/api/registration", userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error registering user");
    }
  }
);

const formSlice = createSlice({
  name: "registration",
  initialState: {
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default formSlice.reducer;
