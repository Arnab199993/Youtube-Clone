import express from "express";
import {login} from "../Controllers/auth.js"

const userRoutes= express.Router()
// userRoutes.post("/login",login).get("/test",test)
userRoutes.post("/login",login)
export default userRoutes