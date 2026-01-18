import { createSlice } from "@reduxjs/toolkit";
import EmptyCart from "../../screens/cart/EmptyCart";

interface CartItem {
  id: number | string;
  name: string;
  qty: number;
  sum: number;
  price: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    //addItemToCart
    addItemToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.qty += 1;
        existingItem.sum += action.payload.price;
      } else {
        state.items.push({
          ...action.payload,
          qty: 1,
          sum: action.payload.price,
        });
      }
    },
    //qtyDecrease
    removeItemFromCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem.qty > 1) {
        existingItem.qty -= 1;
        existingItem.sum -= action.payload.price;
      } else {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },

    //removeProduct
    removeProduct: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    //emptyCart
    emptyCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItemToCart, removeItemFromCart, removeProduct, emptyCart } =
  cartSlice.actions;
export default cartSlice.reducer;
