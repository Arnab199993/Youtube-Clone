import { configureStore } from "@reduxjs/toolkit";
import { authReducers } from "./Slice";
import  Slice  from "./Slice";
const Store=configureStore({
    reducer:{
        Slice:Slice,
        authReducers
    }
})
export default  Store



// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from '../Redux/Slice';

// const Store = configureStore({
//   reducer: {
//     auth: authReducer,
//     // Add other reducers as needed
//   },
// });

// export default Store;