import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";

import { pokemonApi } from "./services/pokemonApi";
import { productsApi } from "./services/productsApi";

import counterReducer from "./features/counterSlice";
import formReducer from "./features/formSlice";
import productReducer from "./features/productSlice";
import cartReducer, { getTotals } from "./features/cartSlice";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
    form: formReducer,
    cart: cartReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddlewear) => {
    return getDefaultMiddlewear().concat(pokemonApi.middleware, productsApi.middleware);
  },
});

store.dispatch(getTotals());

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </Provider>
);
