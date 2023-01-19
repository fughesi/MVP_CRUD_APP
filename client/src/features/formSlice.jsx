import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arr: [],
  firstName: "",
  lastName: "",
  email: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addObject: (state, { payload }) => {
      state += Object.create(...state, payload);
    },
    newObject: (state, { payload }) => {},
    pushArr: (state, action) => {},
  },
});

export const { addObject, newObject, pushArr } = formSlice.actions;

export default formSlice.reducer;
