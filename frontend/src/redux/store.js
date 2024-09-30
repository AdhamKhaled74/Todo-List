import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./reducers/todoSlice";
import { authReducer } from "./reducers/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    todo: todoReducer,
  },
});
