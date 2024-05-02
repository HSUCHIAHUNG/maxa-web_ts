import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TimeData {
  id: string;
  startStation: string;
  endStation: string;
  seats: string;
  Vehicles: string;
}

interface BookingData {
  stationData: { [key: string]: object };
  timeData: { [key: string]: TimeData }; // 將 timeData 介面應用於 timeData 物件
}

type bookingStageType = "selectStation" | "selectTime" | 'selectSeats';

const initialOrderState: {
  bookingStage: bookingStageType;
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
    switchTab(state, action: PayloadAction<bookingStageType>) {
      state.bookingStage = action.payload;
    },
    // 訂車資料儲存
    setStationData(state, action: PayloadAction<[string, object]>) {
      const [keyToUpdate, newData] = action.payload;
      state.bookingData.stationData[keyToUpdate] = newData;
    },
    setTimeData(state, action: PayloadAction<[string, TimeData]>) { 
      const [keyToUpdate, newData] = action.payload;
      state.bookingData.timeData[keyToUpdate] = newData;
    },
  },
});

export const orderActions = orderSlice.actions;

export default orderSlice.reducer;
