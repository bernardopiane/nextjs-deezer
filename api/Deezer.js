import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// root URL for the API
// http://ws.audioscrobbler.com/2.0
// const CORS = "https://cors-anywhere.herokuapp.com/";
const CORS = "https://thingproxy.freeboard.io/fetch/";
const API_URL = "https://api.deezer.com/";

const initialState = {
  data: [],
  query: "",
  isLoading: false,
  error: null,
};

export const fetchTopSongs = createAsyncThunk(
  "deezer/fetchTopSongs",
  async (query) => {
    const response = await axios.get(`${CORS}${API_URL}chart`);
    //   const response = await axios.get(
    //     `${API_URL}?method=chart.gettoptracks&api_key=97276b35e39e6a86b521f362f7d33699&format=json`
    //   );
    return response.data.tracks.data;
  }
);

export const search = createAsyncThunk("deezer/search", async (query) => {
  const response = await axios.get(`${CORS}${API_URL}search?q=${query}`);
  return response.data.data;
});

export

export const deezerSlice = createSlice({
  name: "deezer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(search.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(search.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(search.rejected, (state, action) => {
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

export const selectFavorite = (state) => state.deezer.favorites;

export const selectLoading = (state) => state.deezer.isLoading;

export const selectData = (state) => state.deezer.data;
// export const isLoading = (state) => state.deezer.status === "loading";
export const selectQuery = (state) => state.deezer.query;

export default deezerSlice.reducer;
