import {configureStore} from '@reduxjs/toolkit'
import { productSlice } from '../features/todo/product'
import fetchStatusSlice from '../features/todo/fetchStatusSlice'
import bagSlice from '../features/todo/BagSlice'
import wishlistSlice from '../features/todo/Wishlist'

export const store=configureStore({
   reducer:{
    items:productSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bagItem:bagSlice.reducer,
    wishlist:wishlistSlice.reducer
   }
})