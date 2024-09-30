import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    loading: false,
    isTodoCreated: false,
  },
  reducers: {
    setTodos(state, action) {
      state.todos = action.payload;
    },
    setLoading(state) {
      state.loading = true;
    },
    clearLoading(state) {
      state.loading = false;
    },
    setIsTodoCreated(state) {
      state.isTodoCreated = true;
      state.loading = false;
    },
    clearIsTodoCreated(state) {
      state.isTodoCreated = false;
    },
  },
});

export const todoActions = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
