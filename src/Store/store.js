import { configureStore } from "@reduxjs/toolkit";
import { persistedReducer } from "./reducers";
import persistStore from "redux-persist/es/persistStore";
const store =configureStore({
    reducer:{
       reducer:persistedReducer
    }
})

export default store
export  const persistor = persistStore(store)