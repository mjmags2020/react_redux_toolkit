import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}


let counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count += 1;
        },
        decrement: (state, action) => {
            state.count -= 1;
        },
        incrementBy: (state, action) => {
            state.count += 5;
        },
    }
})

export const { increment, decrement, incrementBy } = counterSlice.actions;
export const getCount = (state) => state.counter.count;

export default counterSlice.reducer;