import { createSlice } from "@reduxjs/toolkit";

// const initialState = {};
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  favColor: "",
};

export const form = createSlice({
  name: "form",
  initialState,
  reducers: {
    addFormData: (state, { payload }) => {
      console.log(payload);
    },
  },
});

export const { addFormData } = form.actions;

export default form.reducer;
