import express from "express";
import {login} from "../Controllers/auth.js"
// import { updateChannelData } from "../Controllers/Channel.js";

const userRoutes= express.Router()
// userRoutes.post("/login",login).get("/test",test)
userRoutes.post("/login",login)
// userRoutes.patch("/update/:id",updateChannelData)
export default userRoutes