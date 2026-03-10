import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "./slices/filters/filtersSlice";
import userSlice from "./slices/user/userSlice";

export const store = configureStore({
  reducer: {
    filters: filtersSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
