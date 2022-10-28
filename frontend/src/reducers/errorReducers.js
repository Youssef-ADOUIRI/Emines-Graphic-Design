import { createSlice } from "@reduxjs/toolkit";
const initialState = {};

const errorSilce = createSlice({
  name: "error",
  initialState: initialState,
  reducers: {
    getErrors(state, action) {
      return action.payload;
    },
  },
});

export const { getErrors } = errorSilce.actions;
export default errorSilce.reducer;
