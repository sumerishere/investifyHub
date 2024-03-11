import { configureStore } from "@reduxjs/toolkit";
import dataSlice from './slice/startUpDataSlice';

export default configureStore({
    reducer:{
        data:dataSlice
    }
})

