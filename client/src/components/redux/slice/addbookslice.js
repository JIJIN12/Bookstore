import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


const initialState = {
    Loading: false,
    error: false,
    addbook_data: [],
    addbookfile_data: []
}

export const postaddbook = createAsyncThunk('postaddbook', async (value) => {
    try {
        console.log('value', value);
        const response = await axios.post('http://localhost:2000/book/addbook', value)
        console.log("response", response);
        return response
    } catch (error) {
        console.log(error);
    }
})


export const postaddbook_file = createAsyncThunk('postaddbookfile', async (value) => {
    console.log(value);
    const response = await axios.post('http://localhost:2000/book/uploads', value, {
        headers: {
            "Content-Type": 'multipart/form-data'
        }
    })
    console.log(response);
    return response
})


const addbookSlice = createSlice({
    name: 'addbook',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(postaddbook.pending, (state, action) => {
            state.Loading = true
        })
        builder.addCase(postaddbook.fulfilled, (state, action) => {
            state.Loading = false
            state.addbook_data = action.payload

            // localStorage.setItem('token',action.payload.data.token)
        })
        builder.addCase(postaddbook.rejected, (state, action) => {
            state.error = true
        })
        builder.addCase(postaddbook_file.pending, (state, action) => {
            state.Loading = true
        })
        builder.addCase(postaddbook_file.fulfilled, (state, action) => {
            state.Loading = false
            state.addbookfile_data = action.payload

            // localStorage.setItem('token',action.payload.data.token)
        })
        builder.addCase(postaddbook_file.rejected, (state, action) => {
            state.error = true
        })
    }
})

export default addbookSlice.reducer