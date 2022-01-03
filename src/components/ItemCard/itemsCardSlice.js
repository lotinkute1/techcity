import {createSlice} from "@reduxjs/toolkit";


const itemsCardSlice = createSlice({
    name: 'itemCard',
    initialState:{
    },
    reducers: {
        addToCart: function (state,action) {
            let temp =[]
            if(localStorage.getItem('cartItems')){
                temp =[...JSON.parse( localStorage.getItem('cartItems'))];
            }
            temp=[...temp,action.payload]
            localStorage.setItem('cartItems',JSON.stringify(temp));
        },
    }
})
const {actions,reducer} = itemsCardSlice;
export const {addToCart} = actions;
export default reducer;