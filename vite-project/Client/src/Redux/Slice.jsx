import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../Api/Index";
// import AuthReducer from "./Reducer/Auth"
const initialState = {
  data: "",
};
const Slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // AuthReducer,
    loginSuccess: (state, action) => {
      // state.data=action.payload
      return {
        ...state,
        data: action.payload,
      };
    },
    loginFailure: (state, action) => {
      return state;
    },
    authReducers: (state, action) => {
      localStorage.setItem("Profile", JSON.stringify({ ...action.payload }));
      state.data = action.payload;
    },
    setCurrentUser: (state, action) => {
      state.data = action.payload;
    },
    CurrentUserReducer: (state, action) => {
      // return action.payload;
      state.data = action.payload;
    },
  },
});
export default Slice.reducer;
export const {
  loginSuccess,
  loginFailure,
  authReducers,
  setCurrentUser,
  CurrentUserReducer,
} = Slice.actions;
export const loginUser = (authData) => async (dispatch) => {
  try {
    const { data } = await api.login(authData);
    dispatch(loginSuccess(data));
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))))
    // console.log("API_RES",  dispatch(loginSuccess(data)));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

// onSubmit={handleSubmit((data) => {
//     const url = "http://localhost:3000/api/users/login";
//     axios
//       .post(url, data)
//       .then((response) => {
//         console.log(response);
//         // console.log(response.data.accessToken);
//         localStorage.setItem(
//           "accessToken",
//           response.data.accessToken
//         );
//         navigate("/");
//       })

// src/store/authSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     isAuthenticated: false,
//     user: null,
//   },
//   reducers: {
//     login: (state, action) => {
//       state.isAuthenticated = true;
//       state.user = action.payload;
//     },
//     logout: (state) => {
//       state.isAuthenticated = false;
//       state.user = null;
//     },
//   },
// });

// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;
