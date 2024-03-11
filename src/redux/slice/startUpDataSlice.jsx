import { createSlice } from "@reduxjs/toolkit";

const startUpDataSlice = createSlice({
    name:'data',
    initialState:{
        data:[]
    },
    reducers:{
        addData:(state,action)=>{
            const newData = action.payload;
            const isDuplicate = state.data.some(item => item.id === newData.id); 
            if (!isDuplicate) {
                state.data.push(newData);
            }
        }
    }
})

export default startUpDataSlice.reducer;
export const selectAllData = (state)=>state.data.data;
export const {addData} = startUpDataSlice.actions;