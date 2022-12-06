import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    update: (state, action) => {},
  },
});

export const { update } = userSlice.actions;
export default userSlice.reducer;
