import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    addProducts: (state, { payload }) => {
      state.product.unshift(payload);
    },
  },
});

export const { addProducts } = productSlice.actions;

export default productSlice.reducer;
