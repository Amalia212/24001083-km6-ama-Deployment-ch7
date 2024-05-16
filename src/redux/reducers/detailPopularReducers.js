// movieSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  detailData: [],
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setDetailData: (state, action) => {
      state.detailData = action.payload;
    },
  },
});

export const { setDetailData } = movieSlice.actions;

export default movieSlice.reducer;
