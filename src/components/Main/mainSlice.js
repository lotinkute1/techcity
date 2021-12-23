import {createSlice} from "@reduxjs/toolkit";


const mainSlice = createSlice({
    name: 'main',
    initialState:{
    },
    reducers: {
        getData: function (state) {
            console.log("ket noi redux ok nha");
            // onValue(dbRef, (snapshot) => {
            //     let temp = [];
            //     snapshot.forEach((item) => {
            //       temp.push(item.val())
            //     })
            //     console.log(temp);
            // })
        },
    }
})
const {actions,reducer} = mainSlice;
export const {getData,testRedux} = actions;
export default reducer;