import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlicer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setIncrement: (state) => {
      state.count++;
    },
    setDecrement: (state) => {
      state.count--;
    },
  },
});

export const { setIncrement, setDecrement } = counterSlicer.actions;

export default counterSlicer.reducer;
