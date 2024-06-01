import { createSlice } from '@reduxjs/toolkit';
import { getUser } from '../../actions/getUser/getUser';
import { setJWTToken } from '../SliceJwt/SliceJwt'; 

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    user: null,
    jwtToken: null, 
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
        state.user = action.payload.userData; 
        state.jwtToken = action.payload.jwtToken; 
        if (action.payload.jwtToken) {
          dispatch(setJWTToken(action.payload.jwtToken));
        }
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default userSlice.reducer;
