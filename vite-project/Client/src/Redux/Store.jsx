import { configureStore } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
// const middleware=[...getDefaultMiddleware(),thunk]
import  Slice  from "./Slice";
const Store=configureStore({
    reducer:{
        Slice:Slice,
        // middleware:((getDefaultMiddleware)=>getDefaultMiddleware().concat(thunk))
        // middleware,
    }
})
export default  Store