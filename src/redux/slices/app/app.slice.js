import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    test: 'Hello World from Redux',
  },
  reducers: {
    setTestState: (state, action) => {
      state.test = action.payload;
    },
  },
});

export const { setTestState } = appSlice.actions;

export default appSlice.reducer;
