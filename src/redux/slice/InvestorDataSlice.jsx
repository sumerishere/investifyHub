// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const FetchInvestor = createAsyncThunk('FetchInvestor', async() =>{
//   const response = await fetch('http://localhost:8080/get-all-investors');

//   return response.json();

// });

// const InvestorDataSlice = createSlice({
//   name: "InvestorData",

//   initialState : {
//     isLoading : false,
//     data: null,
//   },

// extraReducers: (builder) => {

//   builder.addCase(FetchInvestor.pending, (state,action) => {
//     state.isLoading = true
//   })

//   builder.addCase(FetchInvestor.fulfilled, (state,action) => {
//     state.isLoading = false;
//     state.data = action.payload
//   });

//   builder.addCase(FetchInvestor,(state, action) => {
//     console.log("Error", action.payload);
//     state.isError = true;
//   });
// },

// });

// export default InvestorDataSlice.reducer;
