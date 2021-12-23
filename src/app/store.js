import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userReducer from '../features/Auth/userSlice';
import mainReducer from '../components/Main/mainSlice';
const rootReducer = combineReducers({
  user: userReducer,
  main: mainReducer
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
