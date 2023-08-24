import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const exists = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (exists) {
        exists.quantity = exists.quantity + 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }

      state.total += action.payload.price;
    },
    removeOne: (state, action) => {
      const exists = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (exists && exists.quantity > 1) {
        exists.quantity = exists.quantity - 1;
      } else {
        state.products = state.products.filter(
          (product) => product._id !== action.payload._id
        );
      }
      state.total -= action.payload.price;
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      );
      state.total -= action.payload.price * action.payload.quantity;
    },
  },
});

export const { addToCart, removeOne, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
