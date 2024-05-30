import { createSlice } from '@reduxjs/toolkit';
import { getUser } from './getUser';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    user: null,
    error: ''
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default userSlice.reducer;
