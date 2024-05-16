import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice=createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        addwish:(state,action)=>{
           state.push(action.payload)
        },
        removewish:(state,action)=>{
        return state.filter(itemId=>itemId.id!=action.payload)
        }
    }
})

export const wishlistSliceActions=wishlistSlice.actions;
export default wishlistSlice;