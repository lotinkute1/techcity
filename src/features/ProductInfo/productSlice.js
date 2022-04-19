import {  createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    tempVal:''
  },
  reducers: {
    setclearData:(state,action)=>{
    }
  }
});

const { actions, reducer } = productSlice;
export const { setclearData } = actions;
export default reducer;
