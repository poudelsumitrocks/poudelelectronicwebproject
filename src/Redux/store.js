import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slice/Userslice";
import cartReducer from "./Slice/CartSlice"; 

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer, 
  },
});
