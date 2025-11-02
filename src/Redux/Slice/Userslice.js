import { createSlice } from "@reduxjs/toolkit";
import { LogOut } from "lucide-react";
const initialState={
    userIdentifier:localStorage.getItem("loggedInUser")||null,
};
const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.userIdentifier=action.payload;
            localStorage.setItem("loggedInUser",action.payload);
        },
        Logout:(state)=>{
            state.userIdentifier=null;
            localStorage.removeItem("loggedInUser");
        }
    }
})
export const {login,Logout}=userSlice.actions;
export default userSlice.reducer;