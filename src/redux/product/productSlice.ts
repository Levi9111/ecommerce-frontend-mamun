import { createSlice } from '@reduxjs/toolkit';

type TProducts = {
  products: TProducts[];
};

const initialState: TProducts = {
  products: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;
const productsReducer = productsSlice.reducer;

export default productsReducer;
