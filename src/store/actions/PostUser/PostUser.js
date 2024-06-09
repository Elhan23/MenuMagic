import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const PostUser = createAsyncThunk(
  "user/PostUser",
  async ({ data, navigate }, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        "https://magicmenu-22e6224ad3f4.herokuapp.com/api/all",
        data
      );
      const jwtToken = res.headers.authorization;
      navigate("/login"); 
      return { userData: res.data, jwtToken };
    } catch (error) {
      return rejectWithValue(error.response.data || error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: null,
    jwtToken: null,
    error: "",
  },
  reducers: {
    setJWTToken(state, action) {
      state.jwtToken = action.payload;
      localStorage.setItem("jwtToken", action.payload);
    },
    clearUserData(state) {
      state.user = null;
      state.jwtToken = null;
      localStorage.removeItem("jwtToken");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(PostUser.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(PostUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.userData;
      })
      .addCase(PostUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setJWTToken, clearUserData } = userSlice.actions;

export default userSlice.reducer;
