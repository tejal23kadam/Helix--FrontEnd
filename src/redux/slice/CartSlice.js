import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    totalPayableAmount: 0,
    cartCount: 0,
    orders: []
  },

  reducers: {
    setCartCount: (state, action) => {
      state.cartCount = action.payload;
      console.log("cart count in slice " + state.cartCount)
    },

    addToCart: (state, action) => {

      let orderIndex = state.orders.findIndex((x) => x._id === action.payload._id);
      if (orderIndex >= 0) {
        state.orders[orderIndex].quantity = state.orders[orderIndex].quantity + 1;
      }
      else {
        console.log("new record addded and data is   " + action.payload)
        state.orders.push({
          ...action.payload,
          quantity: 1
        })
        // The quantity is the single value that will be returned by the reduce() method. It will contain the value returned by the callback function in each iteration.
        //The item parameter is simply the item from the array, which will change in each iteration just like in the forEach() method.


      }
      state.totalPayableAmount = state.orders.reduce((quantity, item) => item.quantity * Math.trunc(item.price - ((item.price * item.discount) / 100)) + quantity, 0);
    },
    minusFromCart: (state, action) => {
      let orderIndex = state.orders.findIndex((x) => x._id === action.payload._id);
      if (orderIndex >= 0) {
        if (state.orders[orderIndex].quantity > 0) {
          state.orders[orderIndex].quantity = state.orders[orderIndex].quantity - 1;
          state.totalPayableAmount = state.orders.reduce((quantity, item) => item.quantity * Math.trunc(item.price - ((item.price * item.discount) / 100)) + quantity, 0);
        }
      }

    },
    updateToCart: (state, action) => {
      const index = state.findIndex((cart) => cart._id === action.payload._id);
      const updatedState = [...state];
      updatedState[index].text = action.payload.text;
    },

    deleteFromCart: (state, action) => {
      const index = state.orders.findIndex((cart) => cart.id === action.payload);
      if (index !== -1) {

        state.orders.splice(index, 1);
        state.totalPayableAmount = state.orders.reduce((quantity, item) => item.quantity * Math.trunc(item.price - ((item.price * item.discount) / 100)) + quantity, 0, 0)
      }
    },
    deleteAllCart: (state) => {
      state.orders = [];
      state.totalPayableAmount = 0;
    },
  },
});
export const { addToCart, minusFromCart, updateToCart, deleteFromCart, deleteAllCart, setCartCount } = CartSlice.actions;
export default CartSlice.reducer;