import { configureStore } from "@reduxjs/toolkit";
import dataSlice from './slice/startUpDataSlice';
import InvestorReducer from "./slice/InvestorDataSlice";

export default configureStore({
    reducer:{
        data:dataSlice,
        InvestorDataSlice : InvestorReducer,
    }
})

