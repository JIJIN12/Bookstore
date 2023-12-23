import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { toast } from "react-toastify";

const initialState = {
    Loading: false,
    error: false,
    cart_data: [],
    selected_data1: []
}
const token = localStorage.getItem('token')
console.log(token);

export const post_cart = createAsyncThunk('postcart', async (id) => {
    console.log('kkkk');
    // const response = await axios.get(`https://bookstore-7000.onrender.com/cart/${id}`, {
    //     headers: {
    //         'Authorization': `bearer ${token}`
    //     },
    // })
    const response = await fetch(`https://bookstore-7000.onrender.com/cart/${id}`, {
        method: 'GET',
        headers: {
            'Authorization': `bearer ${token}`
        },
    })
    console.log('kkkk');
    console.log(response);

    toast.success('Added to cart', {
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


export const get_cart = createAsyncThunk('getfav', async (id) => {


    const response = await fetch(`https://bookstore-7000.onrender.com/cart/useritems/${id}`, {
        method: 'GET',
        headers: {
            'Authorization': `bearer ${token}`
        },
    })
    console.log(response);

    return response.json()

})



export const delete_cart = createAsyncThunk('deltefav', async (id) => {
    const response = await fetch(`https://bookstore-7000.onrender.com/cart/delete/${id}`, {
        method: 'POST',
        headers: {
            'Authorization': `bearer${token}`
        },
    })

    console.log(response);
    return response.json()
})


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(post_cart.pending, (state, action) => {
            state.Loading = true
        })
        builder.addCase(post_cart.fulfilled, (state, action) => {
            state.Loading = false
            state.cart_data = action.payload
            console.log(action.payload);

        })
        builder.addCase(post_cart.rejected, (state, action) => {
            state.error = action.payload
        })
        builder.addCase(get_cart.pending, (state, action) => {
            state.Loading = true
        })
        builder.addCase(get_cart.fulfilled, (state, action) => {
            state.Loading = false
            state.selected_data1 = action.payload
            console.log(action.payload);

        })
        builder.addCase(get_cart.rejected, (state, action) => {
            state.error = action.payload
        })

    }
})

export default cartSlice.reducer