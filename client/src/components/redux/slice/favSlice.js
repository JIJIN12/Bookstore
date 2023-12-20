import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { toast } from "react-toastify";

const initialState = {
    Loading: false,
    error: false,
    Favourite_data: [],
    selected_data: []
}
const token = localStorage.getItem('token')
console.log(token);

export const post_favourite = createAsyncThunk('postfavourite', async (id) => {
    console.log('kkkk');
    // const response = await axios.get(`https://bookstore-7000.onrender.com/favourite/${id}`, {
    //     headers: {
    //         'Authorization': `bearer ${token}`
    //     },
    // })
    const response = await fetch(`https://bookstore-7000.onrender.com/favourite/${id}`, {
        method: 'GET',
        headers: {
            'Authorization': `bearer ${token}`
        },
    })
    console.log('kkkk');
    console.log(response);

    toast.success('Added to favourite', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    setTimeout(()=>{

        return response.json()
    },1000)

})


export const get_favourite = createAsyncThunk('getfav', async (id) => {


    const response = await fetch(`https://bookstore-7000.onrender.com/favourite/fav/useritems/${id}`, {
        method: 'GET',
        headers: {
            'Authorization': `bearer ${token}`
        },
    })
    console.log(response);

    return response.json()

})



export const delete_fav = createAsyncThunk('deltefav', async (id) => {
    const response = await fetch(`https://bookstore-7000.onrender.com/favourite/delete/${id}`, {
        method: 'POST',
        headers: {
            'Authorization': `bearer${token}`
        },
    })

    console.log(response);
    return response.json()
})


const favouriteSlice = createSlice({
    name: 'Favourite',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(post_favourite.pending, (state, action) => {
            state.Loading = true
        })
        builder.addCase(post_favourite.fulfilled, (state, action) => {
            state.Loading = false
            state.Favourite_data = action.payload
            console.log(action.payload);

        })
        builder.addCase(post_favourite.rejected, (state, action) => {
            state.error = action.payload
        })
        builder.addCase(get_favourite.pending, (state, action) => {
            state.Loading = true
        })
        builder.addCase(get_favourite.fulfilled, (state, action) => {
            state.Loading = false
            state.selected_data = action.payload
            console.log(action.payload);

        })
        builder.addCase(get_favourite.rejected, (state, action) => {
            state.error = action.payload
        })

    }
})

export default favouriteSlice.reducer