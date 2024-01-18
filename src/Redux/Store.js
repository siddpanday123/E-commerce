import { configureStore } from '@reduxjs/toolkit'
import ShoppingItemsReducers from "./Slices/ShoppingItemsSlice"
import productReducer from './Slices/SearchFilter';

export const store = configureStore({
  reducer: {
    Items: ShoppingItemsReducers ,
    FilterProducts: productReducer,
    
  },
})
