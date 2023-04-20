import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggleSlice";
import searchSlice from "./searchSlice";
import searchSuggestionsSlice from "./searchSuggestionsSlice";

const store = configureStore({
  reducer: {
    toggle: toggleSlice,
    search: searchSlice,
    searchSuggestions: searchSuggestionsSlice
  }
});

export default store;
