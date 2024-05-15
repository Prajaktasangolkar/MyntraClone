import { createSlice } from "@reduxjs/toolkit";

// const initialState=DEFAULT_ITEMS
const initialState= []

export const productSlice=createSlice({
    name:'items',
    initialState,
    reducers:{
        addInitialItems:(state,action)=>{
          console.log('reducer',state,action);
          return action.payload;
            // return state
        }
    }

})

// export const {addInitialItems}=productSlice.actions;
export const itemsActions=productSlice.actions;

export default productSlice;


