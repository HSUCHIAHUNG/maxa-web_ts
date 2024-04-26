import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux'  
import authReducer from "./auth";

const store = configureStore({
  reducer: {  auth: authReducer },
});

// dispatch型別 
export type AppDispatch = typeof store . dispatch    

// State型別
export type RootState = ReturnType < typeof store.getState >  

// 匯出dispatch方法
export const useAppDispatch = ( ) => useDispatch < AppDispatch > ( )

export default store;
