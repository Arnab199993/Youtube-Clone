import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import AuthReducer from "./Reducer/Auth"
const initialState={
    num:0
}
const Slice=createSlice({
    name:"Youtube Clone",
    initialState,
    reducers:{
        AuthReducer
    }
})
export default Slice.reducer
export const {add}=Slice.actions


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
