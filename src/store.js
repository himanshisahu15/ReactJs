import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './components/Slice/CartSlice.js'
import logger from 'redux-logger';
const store=configureStore({
    reducer:{
        cart:cartReducer,
    },
middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(logger),
})
export default store;