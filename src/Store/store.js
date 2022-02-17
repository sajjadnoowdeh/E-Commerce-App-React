import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cart.reducer/cartReducer";

const store =configureStore({
    reducer:{
        cart:cartReducer
    }
})

export default store