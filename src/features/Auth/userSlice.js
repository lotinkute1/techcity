import userApi from "../../api/userApi";
import { createSlice } from "@reduxjs/toolkit";
import StorageKeys from "../../constants/index";

const userSlice = createSlice({
  name: "user",
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKeys.USER))?.data.user || {},
    setting: {},
  },
  reducers: {
    logout(state) {
      localStorage.removeItem(StorageKeys.USER);
      state.current = {};
    },
  },
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;
