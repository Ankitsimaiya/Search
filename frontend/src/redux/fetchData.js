// Import necessary functions from Redux Toolkit
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define an async thunk for the API calls
export const fetchData = createAsyncThunk('data/fetchData', async (searchTerm) => {
  const response1 = await axios.get("http://localhost:3000/api/v1/youtube", {
    params: { q: searchTerm },
  });
  const response2 = await axios.get("http://localhost:3000/api/v1/goocus", {
    params: { q: searchTerm },
  });

  // Combine both API responses and return as the payload
  return { 
    youtubeData: response1.data,
    goocusData: response2.data,
  };
});
