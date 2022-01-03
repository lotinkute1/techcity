import { createSlice } from "@reduxjs/toolkit";
const searchSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    typing(state, action) {
      return (state = action.payload);
    },
  },
});

const { actions, reducer } = searchSlice;
export const { typing } = actions;
export default reducer;
