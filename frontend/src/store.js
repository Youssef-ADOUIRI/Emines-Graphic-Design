import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducers";
import errorReducer from "./reducers/errorReducers";

const store = configureStore({
  reducer: {
    auth: authReducer,
    err: errorReducer,
  },
});

export default store;
