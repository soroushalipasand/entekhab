import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./rickandmorty";

const combinedReducer = combineReducers({
  rickandmorty: counterReducer,
});

const store = configureStore({
  reducer: combinedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

const { dispatch } = store;
export { store, dispatch };
