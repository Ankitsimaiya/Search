import { createSlice } from '@reduxjs/toolkit';
import { fetchData } from '../redux/fetchData'; // Import the async thunk

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    youtubeData: null,
    goocusData: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.youtubeData = action.payload.youtubeData;
        state.goocusData = action.payload.goocusData;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
