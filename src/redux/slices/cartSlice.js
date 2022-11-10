import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  items: [],
};

const cartSLice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // addItem(state, action) {
    //   state.items.push(action.payload);
    //   state.totalPrice = state.items.reduce((sum, obj) => {
    //     return (sum += obj.price);
    //   }, 0);
    // },
    addItem(state, action) {
      let findItem = state.items.find((item) => item.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }

      state.totalPrice = state.items.reduce((sum, item) => item.price * item.count + sum, 0);
    },
    minusItem(state, action) {
      const findItem = state.items.find((item) => item.id === action.payload.id);

      if (findItem) {
        findItem.count--;
      }
      if (findItem.count === 0) {
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      }

      state.totalPrice = state.items.reduce((sum, item) => item.price * item.count + sum, 0);
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.totalPrice = state.items.reduce((sum, item) => item.price * item.count + sum, 0);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearItems, minusItem } = cartSLice.actions;

export default cartSLice.reducer;
