import {createSlice} from "@reduxjs/toolkit";


const mainSlice = createSlice({
    name: 'main',
    initialState:{
    },
    reducers: {
        getData: function (state) {
            console.log("ket noi redux ok nha");
        },
    }
})
const {actions,reducer} = mainSlice;
export const {getData,testRedux} = actions;
export default reducer;