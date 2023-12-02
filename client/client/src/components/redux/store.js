import {configureStore} from '@reduxjs/toolkit'
import registerreducer from './slice/registerslice'
import  loginreducer  from './slice/loginslice'
import bookreducer from './slice/bookslice'
import addbookreducer from './slice/addbookslice'
import favouritereducer from './slice/favSlice'
export const store = configureStore({
    reducer:{
        register:registerreducer,
        login:loginreducer,
        book:bookreducer,
        addbook:addbookreducer,
        Favourite:favouritereducer

    }
})