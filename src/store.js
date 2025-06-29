import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './components/CounterSlice/CounterSlice';
export const store=configureStore({
    reducer:{
        counter:counterReducer,
    }
})