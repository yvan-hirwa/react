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
  },
});

export const { incrementByOne, decrementByOne } = counterSlice.actions;
export default counterSlice.reducer;
