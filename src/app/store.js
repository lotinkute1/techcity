import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userReducer from '../features/Auth/userSlice';
import mainReducer from '../components/Main/mainSlice';
import itemsCardSlice from '../components/ItemCard/itemsCardSlice';
const rootReducer = combineReducers({
  user: userReducer,
  main: mainReducer,
  itemCard:itemsCardSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
