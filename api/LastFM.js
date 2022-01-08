import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// root URL for the API
// http://ws.audioscrobbler.com/2.0
const API_URL = "http://ws.audioscrobbler.com/2.0";

const initialState = {
  data: [],
  query: "",
  isLoading: false,
  error: null,
};

export const fetchTopSongs = createAsyncThunk(
  "lastFm/fetchTopSongs",
  async (query) => {
    const response = await axios.get(
      `${API_URL}?method=geo.gettoptracks&country=brazil&api_key=97276b35e39e6a86b521f362f7d33699&format=json`
    );
    //   const response = await axios.get(
    //     `${API_URL}?method=chart.gettoptracks&api_key=97276b35e39e6a86b521f362f7d33699&format=json`
    //   );
    return response.data.tracks.track;
  }
);

export const fetchByName = createAsyncThunk(
  "lastFm/fetchByName",
  async (name) => {
    const response = await axios.get(
      `${API_URL}?method=track.search&track=${name}&api_key=97276b35e39e6a86b521f362f7d33699&format=json`
    );
    return response.data;
  }
);

export const lastFMSlice = createSlice({
  name: "lastFM",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchByName.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchByName.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.results.trackmatches.track;
      })
      .addCase(fetchByName.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchTopSongs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTopSongs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchTopSongs.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const selectData = (state) => state.lastFM.data;
export const isLoading = (state) => state.lastFM.status === "loading";
export const selectQuery = (state) => state.lastFM.query;

export default lastFMSlice.reducer;
