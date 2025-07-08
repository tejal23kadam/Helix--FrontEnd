import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    totalPayableAmount: 0,
    orders: []
  },

  reducers: {
    addToCart: (state, action) => {
      let orderIndex = state.orders.findIndex((x) => x.id === action.payload.id);
      if (orderIndex >= 0) {
        state.orders[orderIndex].quantity = state.orders[orderIndex].quantity + 1;
      }
      else {
        state.orders.push({
          ...action.payload,
          quantity: 1
        })
        // The accumulator quantity is the single value that will be returned by the reduce() method. It will contain the value returned by the callback function in each iteration.
        //The item parameter is simply the item from the array, which will change in each iteration just like in the forEach() method.

        state.totalPayableAmount = state.orders.reduce((quantity, item) => item.quantity * Math.trunc(item.price - ((item.price * item.discount) / 100)) + quantity, 0);
      }
    },
    minusFromCart: (state, action) => {
      let orderIndex = state.orders.findIndex((x) => x.id === action.payload.id);
      if (orderIndex >= 0) {
        if (state.orders[orderIndex].quantity > 0) {
          state.orders[orderIndex].quantity = state.orders[orderIndex].quantity - 1;
        }
      }   

    },
    updateToCart: (state, action) => {
      const index = state.findIndex((cart) => cart.id === action.payload.id);
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
    deleteAllCart: (state, action) => {
      console.log("delete slice is called")
     // state.splice(0); //if you don't specify the end point of an array it will delete all the array starting from the given position.
      state.orders = [];
      state.totalPayableAmount = 0;         
    },
  },
});
export const { addToCart, minusFromCart, updateToCart, deleteFromCart, deleteAllCart } = CartSlice.actions;
export default CartSlice.reducer;