import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

//export everything
export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
