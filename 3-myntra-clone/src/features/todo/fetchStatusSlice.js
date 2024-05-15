import {createSlice} from '@reduxjs/toolkit'



export const fetchStatusSlice=createSlice({
    name:'fetchStatus',
    initialState:{
        fetchDone:false, // false:'PENDING' or true :'DONE'   //single operation false to true -> it call and successfully data come then it will be true
        currentlyFetching:false, //call start=true call end =false
    },
    reducers:{
       markFetchDone:(state)=>{
         state.fetchDone=true;
       },
       markFetchStarted:(state)=>{
         state.currentlyFetching=true;
       },
       markFetchFinished:(state)=>{
         state.currentlyFetching=false;
       },
    }
})

// export const {markFetchDone,markFetchStarted,markFetchFinished} =fetchStatusSlice.actions;

export const fetchStatusActions=fetchStatusSlice.actions;
export default fetchStatusSlice;