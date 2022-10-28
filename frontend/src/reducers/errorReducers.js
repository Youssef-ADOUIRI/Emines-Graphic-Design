import { createSlice } from "@reduxjs/toolkit";
const initialState = {};

/*
//old redux
import { GET_ERRORS } from "../actions/types";
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}
*/

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
