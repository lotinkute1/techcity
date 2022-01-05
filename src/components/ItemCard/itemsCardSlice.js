import { createSlice } from "@reduxjs/toolkit";

const itemsCardSlice = createSlice({
  name: "itemCard",
  initialState: {},
  reducers: {
    addToCart: function (state, action) {
      let temp = [];
      let duplicate = false;
      let currentNumber=0;
      let duplicateindex;
      let localStorageItemsCart = JSON.parse(localStorage.getItem("cartItems"));
      if (localStorageItemsCart) {
        // duyệt qua mảng local
        localStorageItemsCart.forEach(function (item,index) {
            // trùng id thì sẽ tăng number lên 1 va set biến duplicate=true
          if (item.itemID == action.payload.itemID) {
              
            currentNumber=item.number +1;
            duplicateindex=index;
            duplicate=true;
          }
        });

        temp = [...localStorageItemsCart];
        // nếu duyệt qua mà không có trùng id thì sẽ add mới một item với number mặc định là 1
        if(duplicate){
            temp[duplicateindex]={
                itemID: action.payload.itemID,
                productName: action.payload.productName,
                productImage: action.payload.productImage,
                defaultPrice: action.payload.defaultPrice,
                number: currentNumber,
              }
        }else{
            
              temp = [
                ...temp,
                {
                  itemID: action.payload.itemID,
                  productName: action.payload.productName,
                  productImage: action.payload.productImage,
                  defaultPrice: action.payload.defaultPrice,
                  number: 1,
                },
              ];
        }
        
      }else{
        temp=[{number: 1,...action.payload}]
      }

      localStorage.setItem("cartItems", JSON.stringify(temp));
    },
  },
});
const { actions, reducer } = itemsCardSlice;
export const { addToCart } = actions;
export default reducer;
