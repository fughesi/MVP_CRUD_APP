import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import counterReducer from "../features/users/usersSlice";
import formReducer from "../features/formSlice";
import { pokemonApi } from "../services/pokemonApi";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    form: formReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware),
});

setupListeners(store.dispatch);
