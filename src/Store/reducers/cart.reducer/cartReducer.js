import {createSlice} from '@reduxjs/toolkit'

const init = {
    products:[],
    quantity:0,
    total:0
}
const cartReducer = createSlice({
  name:"cartReducer",
  initialState:init,
  reducers:{
      addProduct:(state,action)=>{
        state.quantity += 1;
        state.products.push(action.payload);
        state.total += action.payload.qantity  * action.payload.price
      }
  }
})

export const {addProduct} = cartReducer.actions;
export default cartReducer.reducer;