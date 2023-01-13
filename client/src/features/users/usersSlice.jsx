import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addNewUser: (state, action) => {
      console.log("new user added");
    },
  },
});

export const { addNewUser } = usersSlice.actions;

export default usersSlice.reducer;
