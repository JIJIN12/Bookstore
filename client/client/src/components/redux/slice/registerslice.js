import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    Loading:false,
    error:false,
    register_data:[]
}
export const registrataion = createAsyncThunk('registrataion',async (value)=>{
    console.log(value);
    const requestBody = JSON.stringify(value);
    const response = await fetch('http://localhost:2000/register',{
        method:'POST',
        body:requestBody,
        headers:{
            'Content-Type':'application/json'
        }
    })

    console.log(response);
    return response.json()
})


export const registerSlice = createSlice({
    name:'register',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(registrataion.pending,(state,action)=>{
            state.Loading = true
        })
        builder.addCase(registrataion.fulfilled,(state,action)=>{
            state.Loading = false
            state.register_data  = action.payload
        })
        builder.addCase(registrataion.rejected,(state,action)=>{
            state.error = true
        })
    }
})

export default registerSlice.reducer