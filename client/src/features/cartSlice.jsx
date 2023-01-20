import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalCartQuantity: 0,
  totalCartAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, { payload }) => {
      const indexedItem = state.items.findIndex((i) => i.id === payload.id);

      if (indexedItem >= 0) {
        state.items[indexedItem].quantity += 1;
      } else {
        const updatedItems = { ...payload, quantity: 1 };
        state.items.push(updatedItems);
      }

      state.totalCartQuantity += 1;

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    decrementItemQuantity: (state, { payload }) => {
      const indexedItem = state.items.findIndex((i) => i.id === payload.id);

      const indexed = state.items[indexedItem];

      if (indexed.quantity > 1) {
        indexed.quantity -= 1;
      } else {
        const deletedItems = state.items.filter((i) => {
          i.id !== payload.id;
        });

        state.items = deletedItems;
      }

      localStorage.removeItem("cartItems");

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    incrementItemQuantity: (state, { payload }) => {
      const indexedItem = state.items.findIndex((i) => i.id === payload.id);

      state.items[indexedItem].quantity += 1;

      localStorage.removeItem("cartItems");

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    deleteItemFromCart: (state, { payload }) => {
      const deletedItems = state.items.filter((i) => {
        return i.id !== payload.id;
      });

      state.items = deletedItems;

      localStorage.removeItem("cartItems");

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
  },
});

export const { addItemToCart, decrementItemQuantity, incrementItemQuantity, deleteItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
