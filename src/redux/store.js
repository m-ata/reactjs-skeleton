import { combineReducers, configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/app/app.slice";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  app: appReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
