import { createSlice } from "@reduxjs/toolkit";

const ProductIDSlice  = createSlice({
    name: "productIDFilter",
    initialState:{        
        productID:20
      },  
    reducers: {
        addToProductIDFilter: (state, action) => {
            state.productID = action.payload
        },
        deleteFromProductIDFilter: (state, action) => {
            state.productID = null
        }
    }
});
export const { addToProductIDFilter, deleteFromProductIDFilter } = ProductIDSlice.actions;
export default ProductIDSlice.reducer;