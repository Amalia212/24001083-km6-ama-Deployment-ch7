import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: ["Running", "Working", "Learning"],
  hobby: [],
  token: "INI ADALAH TOKEN",
};

const todoSlicer = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodo: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    removeTodo: (state, action) => {
      state.list = [...state.list?.filter((e) => e !== action.payload)];
    },
    setHobby: () => {},
  },
});

export const { setTodo, removeTodo } = todoSlicer.actions;

export default todoSlicer.reducer;
