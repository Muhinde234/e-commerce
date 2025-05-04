import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add item to cart
    addItem: (state, action) => {
      const { id, color, size, quantity, price, name, image } = action.payload;
      const existingItem = state.items.find(
        item => item.id === id && item.selectedColor === color && item.selectedSize === size
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({
          id,
          name,
          price,
          image,
          selectedColor: color,
          selectedSize: size,
          quantity,
        });
      }

      state.totalQuantity += quantity;
      state.totalPrice += price * quantity;
    },

    // Remove item from cart
    removeItem: (state, action) => {
      const { id, color, size } = action.payload;
      const index = state.items.findIndex(
        item => item.id === id && item.selectedColor === color && item.selectedSize === size
      );

      if (index >= 0) {
        const item = state.items[index];
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.price * item.quantity;
        state.items.splice(index, 1);
      }
    },

    // Update item quantity
    updateQuantity: (state, action) => {
      const { id, color, size, quantity } = action.payload;
      const item = state.items.find(
        item => item.id === id && item.selectedColor === color && item.selectedSize === size
      );

      if (item) {
        state.totalQuantity += quantity - item.quantity;
        state.totalPrice += (quantity - item.quantity) * item.price;
        item.quantity = quantity;
      }
    },

    // Clear entire cart
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

// Export actions for components to use
export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;