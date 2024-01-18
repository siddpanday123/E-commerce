// productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 
  searchQuery: "",
};

const productSlice = createSlice({
  name: 'FilterProducts',
  initialState,
  reducers: {
    updateSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { updateSearchQuery } = productSlice.actions;
export const selectProducts = (state) => state.FilterProducts.products;
export const selectSearchQuery = (state) => state.FilterProducts.searchQuery;

export default productSlice.reducer;
