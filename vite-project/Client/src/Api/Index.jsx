import axios from "axios"
const API=axios.create({baseURL:`http://localhost:5500/`})
API.interceptors.request.use(req=>{
    const profile = JSON.parse(localStorage.getItem("Profile"));
    if(localStorage.getItem("Profile")){
        req.headers.authorization=`Bearer ${JSON.parse(localStorage.getItem("Profile")).token}`
    }
    return req
})
export const login=(authData)=>API.post("/user/login",authData)
export const UpdateChannelData=(id,updateData)=>API.patch(`/user/update/${id}`,updateData)