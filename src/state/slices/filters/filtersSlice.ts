import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Language } from "./languages";
import type { LanguageLevel } from "./levels";

interface FiltersState {
  selectedLanguages: Language["code"][];
  customUserLanguages: string[];
  selectedLevels: LanguageLevel["value"][];
  search: string;
}

const initialState: FiltersState = {
  selectedLanguages: [],
  customUserLanguages: [],
  selectedLevels: [],
  search: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    toggleLanguage: (state, action: PayloadAction<Language["code"]>) => {
      if (state.selectedLanguages.includes(action.payload)) {
        state.selectedLanguages = state.selectedLanguages.filter(
          (lang) => lang !== action.payload,
        );
      } else {
        state.selectedLanguages.push(action.payload);
      }
    },
    setLanguages: (state, action: PayloadAction<Language["code"][]>) => {
      state.selectedLanguages = action.payload;
    },
    setLevels: (state, action: PayloadAction<LanguageLevel["value"][]>) => {
      state.selectedLevels = action.payload;
    },
    addCustomUserLanguage: (state, action: PayloadAction<string>) => {
      state.customUserLanguages.push(action.payload);
    },
    setCustomUserLanguages: (state, action: PayloadAction<string[]>) => {
      state.customUserLanguages = action.payload;
    },
    removeCustomUserLanguage: (state, action: PayloadAction<string>) => {
      state.customUserLanguages = state.customUserLanguages.filter(
        (lang) => lang !== action.payload,
      );
    },
    toggleLevel: (state, action: PayloadAction<LanguageLevel["value"]>) => {
      if (state.selectedLevels.includes(action.payload)) {
        state.selectedLevels = state.selectedLevels.filter(
          (level) => level !== action.payload,
        );
      } else {
        state.selectedLevels.push(action.payload);
      }
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const {
  toggleLanguage,
  addCustomUserLanguage,
  removeCustomUserLanguage,
  toggleLevel,
  setSearch,
  setLanguages,
  setLevels,
  setCustomUserLanguages,
} = filtersSlice.actions;

export default filtersSlice.reducer;
