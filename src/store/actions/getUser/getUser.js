import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk(
  "user/getUser",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        "https://magicmenu-22e6224ad3f4.herokuapp.com/api/registration",
        userData
      );
      const jwtToken = res.headers.authorization;
      return { userData: res.data, jwtToken };
    } catch (error) {
      return rejectWithValue(error.response.data);
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.userData;
        state.jwtToken = action.payload.jwtToken;
        if (action.payload.jwtToken) {
          state.jwtToken = action.payload.jwtToken;
          localStorage.setItem("jwtToken", action.payload.jwtToken);
        }
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setJWTToken } = userSlice.actions;

export default userSlice.reducer;
