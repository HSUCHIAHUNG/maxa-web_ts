import { createSlice } from "@reduxjs/toolkit";

const initialOrderState = {
  tab: { oneWayticket: true, returnTicket: false },
};

const orderSlice = createSlice({
  name: "order",
  initialState: initialOrderState,
  reducers: {
    switchTab(state, action) {
      action.payload = !action.payload
      console.log(state);
    },
  },
});

export const orderActions = orderSlice.actions;

export default orderSlice.reducer;
