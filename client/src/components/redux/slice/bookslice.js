import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


const initialState = {
    Loading:false,
    error:false,
    book_data:[],
    checked_data:[]
}

export const postbook = createAsyncThunk('postbook',async ()=>{
    const response = await axios.get('https://bookstore-7000.onrender.com/book')

    console.log(response);
    return response
})



export const postchecked = createAsyncThunk('postchecked',async(value)=>{
    const response = await axios.post('https://bookstore-7000.onrender.com/book/check',value)
    console.log(response.data.Details);
    return response
})






 const bookSlice = createSlice({
    name:'book',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(postbook.pending,(state,action)=>{
            state.Loading = true
        })
        builder.addCase(postbook.fulfilled,(state,action)=>{
            state.Loading = false
            state.book_data  = action.payload.data.Details

        })
        builder.addCase(postbook.rejected,(state,action)=>{
            state.error = true
        })

        builder.addCase(postchecked.pending,(state,action)=>{
            state.Loading = true
        })
        builder.addCase(postchecked.fulfilled,(state,action)=>{
            state.Loading = false
            state.checked_data  = action.payload.data.Details

        })
        builder.addCase(postchecked.rejected,(state,action)=>{
            state.error = action.payload
        })
    }
})

export default bookSlice.reducer