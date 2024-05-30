const chefSlice = createSlice({
  name: "chef",
  initialState: {
    loading: true,
    chef: null,
    error: ''
  },
  reducers: {}, 
  extraReducers: (builder) => {
    builder
      .addCase(GetChef.pending, (state) => {
        state.loading = true;
      })
      .addCase(GetChef.fulfilled, (state, action) => {
        state.loading = false;
        state.chef = action.payload;
      })
      .addCase(GetChef.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default chefSlice.reducer;