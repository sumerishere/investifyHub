import { createSlice } from "@reduxjs/toolkit";

const startUpDataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
  
  },
  reducers: {
    addData: (state, action) => {
      const newData = action.payload;
      const isDuplicate = state.data.some((item) => item.id === newData.id);
      if (!isDuplicate) {
        state.data.push(newData);
      }
    },

    // setSelectedCompanyName: (state, action) => {
    //   state.selectedCompanyName = action.payload;
    // },
  },
});

export default startUpDataSlice.reducer;
export const selectAllData = (state) => state.data.data;
// export const selectSelectedCompanyName = (state) => state.data.selectedCompanyName; // Selector for the company name
export const { addData } = startUpDataSlice.actions;
