import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userReducer from '../feature/Auth/userSlice';
const rootReducer = combineReducers({
  user: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
