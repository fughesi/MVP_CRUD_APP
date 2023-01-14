import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  bool: true,
};

export const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increaseByOne: (state) => {
      state.value += 1;
    },
    decreaseByOne: (state) => {
      state.value -= 1;
    },
    increasebyAmount: (state, { payload }) => {
      state.value += payload;
    },
    decreaseByAmount: (state, { payload }) => {
      state.value -= payload;
    },
    flipBool: (state) => {
      state.bool = !state.bool;
    },
  },
});

export const { increaseByOne, increasebyAmount, decreaseByOne, decreaseByAmount, flipBool } = counter.actions;

export default counter.reducer;
