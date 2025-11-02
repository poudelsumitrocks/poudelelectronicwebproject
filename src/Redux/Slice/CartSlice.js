import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQty: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const qtyToAdd =
        newItem.qty && Number(newItem.qty) > 0 ? Number(newItem.qty) : 1;

      const existingItem = state.items.find(
        (item) => item.name === newItem.name
      );

      if (existingItem) {
        existingItem.qty += qtyToAdd;
      } else {
        state.items.push({ ...newItem, qty: qtyToAdd });
      }

      state.totalQty = Number(state.totalQty + qtyToAdd);
      state.totalPrice += (newItem.price || 0) * qtyToAdd;
    },

    removeFromCart(state, action) {
      const removeItem = action.payload; // expected: { id } 🟠 fixed payload structure
      // const existingItem = state.items.find(
      //   (item) => item.id === removeItem.id
      // );
      const existingItem = state.items.find(
        (item) => item.name === removeItem.name
      );

      if (existingItem) {
        state.totalQty -= existingItem.qty;
        state.totalPrice -= existingItem.price * existingItem.qty;
        state.items = state.items.filter(
          (item) => item.name !== removeItem.name
        );
      }
    },

    increaseQuantity(state, action) {
      const { id, amount = 1 } = action.payload; // 🟩 added support for amount
      const existingItem = state.items.find((item) => item.name === name);

      if (existingItem) {
        existingItem.qty += amount;
        state.totalQty += amount;
        state.totalPrice += existingItem.price * amount;
      }
    },

    decreaseQuantity(state, action) {
      const { id, amount = 1 } = action.payload; // 🟩 added support for amount
      const existingItem = state.items.find((item) => item.name === name);

      if (existingItem) {
        if (existingItem.qty > amount) {
          existingItem.qty -= amount;
          state.totalQty -= amount;
          state.totalPrice -= existingItem.price * amount;
        } else {
          state.items = state.items.filter((item) => item.name !== name);
          state.totalQty -= existingItem.qty;
          state.totalPrice -= existingItem.price * existingItem.qty;
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
