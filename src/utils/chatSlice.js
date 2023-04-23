import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: { messages: [] },
  reducers: {
    setMessages: (state, action) => {
        // console.log(action.payload)
        state.messages.splice(25,5);
      state.messages.unshift(action.payload);
    }
  }
});

export const { setMessages } = cartSlice.actions;
export default cartSlice.reducer;
