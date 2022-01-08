import { configureStore } from "@reduxjs/toolkit";
import lastFMReducer from "../api/LastFM";
import deezerReducer from "../api/Deezer";

export const store = configureStore({
  reducer: {
    // lastFM: lastFMReducer,
    deezer: deezerReducer,
  },
});
