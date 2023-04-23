import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggleSlice";
import searchSlice from "./searchSlice";
import searchSuggestionsSlice from "./searchSuggestionsSlice";
import chatSlice from "./chatSlice";


const store = configureStore({
  reducer: {
    toggle: toggleSlice,
    search: searchSlice,
    searchSuggestions: searchSuggestionsSlice,
    chat: chatSlice
  }
});

export default store;
