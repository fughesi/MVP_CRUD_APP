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
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.email = payload.email;
    },

    pushArr: (state, { payload }) => {
      state.arr.push(payload);
    },
  },
});

export const { addObject, pushArr } = formSlice.actions;

export default formSlice.reducer;
