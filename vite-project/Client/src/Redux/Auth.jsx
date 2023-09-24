import * as api from "../Api/Index"
export const login = (authData)=>async(dispatch)=>{
    try{
        const {data}=await api.login(authData)
        dispatch({type:"AUTH",data})
    }catch(error){
        alert(error)
    }
}