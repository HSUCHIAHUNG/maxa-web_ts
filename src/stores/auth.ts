import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { isMember: false, isGuest:false };

const authSlice = createSlice({
  name: "auth",
  initialState: initialCounterState,
  reducers: {
    isLogin(state) {
        state.isMember = !state.isMember;
    },
    isDialog(state) {
      state.isGuest = !state.isGuest
    }
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
