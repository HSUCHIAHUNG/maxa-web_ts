import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const authSlice = createSlice({
    name: 'auth',
    initialState: initialCounterState,
    reducers: {
        increament(state) {
            state.counter++;
        }
    }
})

export const authActions = authSlice.actions;

export default authSlice.reducer;