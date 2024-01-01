import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  Loading: false,
  error: false,
  register_data: [],
};
export const registrataion = createAsyncThunk(
  "registrataion",
  async (value) => {
    console.log(value);
    // const response = await axios.post(
    //   "https://bookstore-7000.onrender.com/register",
    //   value
    // );
    const requestBody = JSON.stringify(value);
    const response = await fetch('https://bookstore-7000.onrender.com/register',{
        method:'POST',
        body:requestBody,
        headers:{
            'Content-Type':'application/json'
        }
    })

    console.log(response);
    toast.success("registration successful", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    setTimeout(() => {
      return response.json();
    }, 1000);
  }
);

export const registerSlice = createSlice({
  name: "register",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(registrataion.pending, (state, action) => {
      state.Loading = true;
    });
    builder.addCase(registrataion.fulfilled, (state, action) => {
      state.Loading = false;
      state.register_data = action.payload;
      console.log(action);
    });
    builder.addCase(registrataion.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export default registerSlice.reducer;
