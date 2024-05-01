import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BookingData {
  stationData: { [key: string]: object }; 
  timeData: { [key: string]: object }; 
}

const initialOrderState: {
  bookingStage:  'selectStation' | 'selectTime';
  bookingData: BookingData;
} = {
  bookingStage: "selectStation",
  bookingData: {
    stationData: {},
    timeData: {},
  },
};

const orderSlice = createSlice({
  name: "order",
  initialState: initialOrderState,
  reducers: {
    // 切換訂購階段
    switchTab(state, action: PayloadAction<'selectStation' | 'selectTime'>) {
      state.bookingStage = action.payload;
    },
    // 訂車資料儲存
    setStationData(state, action: PayloadAction<[string, object]>) {
      const [keyToUpdate, newData] = action.payload;
      state.bookingData.stationData[keyToUpdate] =
        newData;
    },
    setTimeData(state, action: PayloadAction<[string, object]>) {
      const [keyToUpdate, newData] = action.payload;
      state.bookingData.timeData[keyToUpdate]=
        newData;
    },
  },
});

export const orderActions = orderSlice.actions;

export default orderSlice.reducer;
