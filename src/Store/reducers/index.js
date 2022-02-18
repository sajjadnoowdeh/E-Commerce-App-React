import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import cartReducer from "./cart.reducer/cartReducer";
import userReducer from "./user.reducer/user.reducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
