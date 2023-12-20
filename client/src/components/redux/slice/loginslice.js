import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


const initialState = {
    Loading:false,
    error:false,
    Login_data:[]
}

export const postLogin = createAsyncThunk('postLogin',async (value)=>{
    console.log(value);
    const response = await axios.post('https://bookstore-7000.onrender.com/login',value)

    console.log(response);
    return response
})


 const loginSlice = createSlice({
    name:'login',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(postLogin.pending,(state,action)=>{
            state.Loading = true
        })
        builder.addCase(postLogin.fulfilled,(state,action)=>{
            state.Loading = false
            state.Login_data  = action.payload
            console.log(action.payload.data);

            localStorage.setItem('token',action.payload.data.token)
            localStorage.setItem('userid',action.payload.data.user_id)
        })
        builder.addCase(postLogin.rejected,(state,action)=>{
            state.error = true
        })
    }
})

export default loginSlice.reducer