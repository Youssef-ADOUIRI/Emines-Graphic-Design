import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { setCurrentUser, setUserLoading } from "../reducers/authReducers";
import { getErrors } from "../reducers/errorReducers";
import { createAsyncThunk } from "@reduxjs/toolkit";


// Register User
export const registerUser = createAsyncThunk(
  "user/register",
  async (userData, { rejectWithValue }) => {
    try {
      await axios
        .post("/api/users/register", userData)
        .then((res) => console.log(res));
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

//login user
export const loginUser = createAsyncThunk(
  "user/login",
  async (userData, { rejectWithValue }) => {
    try {
      const access = axios
        .post("http://localhost:5000/api/users/login", userData)
        .then((res) => {
          // Save to localStorage
          // Set token to localStorage
          const { token } = res.data;
          localStorage.setItem("userToken", token);
          // Set token to Auth header
          setAuthToken(token);
          // Decode token to get user data
          const decoded = jwt_decode(token);
          //adding token to payload
          //decoded["token"] = token;
          // Decode token to get user data
          return {
            token: token,
            id: decoded.id,
            success: decoded.success,
            userdata: { name: decoded.name, email: decoded.email },
          };
        });
      return access;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// // Log user out
// export const logoutUser = (dispatch) => {

//   // Remove token from local storage
//   localStorage.removeItem("jwtToken");
//   // Remove auth header for future requests
//   setAuthToken(false);
//   // Set current user to empty object {} which will set isAuthenticated to false
//   dispatch(setCurrentUser({}));
// };
