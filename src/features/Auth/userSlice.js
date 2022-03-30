import userApi from "../../api/userApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import StorageKeys from "../../constants/index";

export const login = createAsyncThunk('user/login', async (payload) => {
  const data = await userApi.login(payload);

  localStorage.setItem(StorageKeys.TOKEN, data.token)
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user))
  return data.user;
})

const userSlice = createSlice({
  name: "user",
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
    setting: {},
  },
  reducers: {
    logout(state) {
      localStorage.removeItem(StorageKeys.USER);
      state.current = {};
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
        state.current = action.payload
    }
}
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;
