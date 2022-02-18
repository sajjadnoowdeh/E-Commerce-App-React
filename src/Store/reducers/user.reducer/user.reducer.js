import {createSlice} from '@reduxjs/toolkit'

const init = {
    currentUser:null,
    loading:false,
    error:false
}
const userReducer = createSlice({
  name:"userReducer",
  initialState:init,
  reducers:{
      startLogin:(state,action)=>{
          state.loading=true;
      },
      successLogin:(state,action)=>{
          state.currentUser = action.payload;
          state.loading=false;
      },
      faillLogin:(state,action)=>{
          state.error = true;
          state.loading=false
      }
  }
})

export const {startLogin,successLogin,faillLogin} = userReducer.actions;
export default userReducer.reducer;