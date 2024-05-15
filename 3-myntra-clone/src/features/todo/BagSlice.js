import {createSlice} from '@reduxjs/toolkit'



export const bagSlice=createSlice({
    name:'bagItem',
    initialState:[],
    reducers:{
       addbag:(state,action)=>{
           state.push(action.payload);
       },
       removebag:(state,action)=>{
         return state.filter(itemId=>itemId.id!==action.payload)
       }
    }
})

// export const {markFetchDone,markFetchStarted,markFetchFinished} =fetchStatusSlice.actions;

export const bagSliceActions=bagSlice.actions;
export default bagSlice;