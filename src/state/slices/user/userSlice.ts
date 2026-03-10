import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { defaultTheme, type ThemeId } from "../../../config/themes.config";

interface UserState {
  theme: ThemeId;
}

const initialState: UserState = {
  theme: defaultTheme,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeId>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = userSlice.actions;
export default userSlice.reducer;