import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Асинхронный thunk для получения пользователей
export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("http://localhost:8080/api/registration");
      return res.data;
    } catch (error) {
      console.error("Error fetching users:", error); // Вывод ошибки в консоль
      return rejectWithValue(error.response?.data || "Error fetching users");
    }
  }
);

// Создание slice
const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    user: null,
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.error("Error:", action.payload); 
      });
  },
});

export default usersSlice.reducer;
