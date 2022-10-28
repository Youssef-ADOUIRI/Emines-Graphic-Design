import { createSlice } from "@reduxjs/toolkit";

import isEmpty from "is-empty";

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
};

/*
//old redux
import { SET_CURRENT_USER, USER_LOADING } from "../actions/types";
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
*/

const authSilce = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setCurrentUser(state, action) {
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    },
    setUserLoading(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
  },
});

export const { setCurrentUser, setUserLoading } = authSilce.actions;
export default authSilce.reducer;
