import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementByOne: (state) => {
      state.count += 1;
    },
    decrementByOne: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.count -= action.payload;
    },
  },
});

export const {
  incrementByOne,
  decrementByOne,
  incrementByAmount,
  decrementByAmount,
} = counterSlice.actions;
export default counterSlice.reducer;
