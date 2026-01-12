import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    //addItemToCart
    //qtyDecrease
    //removeProduct
    //emptyCart
  },
});

export const {} = cartSlice.actions;
export default cartSlice.reducer;
