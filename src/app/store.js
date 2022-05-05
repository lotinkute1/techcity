import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userReducer from "../features/Auth/userSlice";
import mainReducer from "../components/Main/mainSlice";
import itemsCardSlice from "../components/ItemCard/itemsCardSlice";
import searchReducer from "../components/Header2/searchSlice";
import productDetailReducer from "../features/ProductInfo/productSlice";

const rootReducer = combineReducers({
  user: userReducer,
  main: mainReducer,
  product: productDetailReducer,
  itemCard: itemsCardSlice,
  search: searchReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
