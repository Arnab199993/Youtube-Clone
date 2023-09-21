import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
const initialState={
    num:0
}
const Slice=createSlice({
    name:"Youtube Clone",
    initialState,
    reducers:{
        add:((state)=>{
            state.num=state.num
        }),
    }
})
export default Slice.reducer
export const {add}=Slice.actions