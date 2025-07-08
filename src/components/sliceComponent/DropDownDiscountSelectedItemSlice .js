import { createSlice } from "@reduxjs/toolkit";

const DropDownDiscountSelectedItemSlice = createSlice({
    name: "dropDownDiscountSelectedItemFilter",
    initialState:{        
        dropDownDiscountSelectedItem: ''     
      },  
    reducers: {
        addToDiscountSelectedItemFilter: (state, action) => {
            state.dropDownDiscountSelectedItem = action.payload
        },
        deleteFromDiscountSelectedItemFilter: (state, action) => {
            state.dropDownDiscountSelectedItem = null
        }
    }
});
export const { addToDiscountSelectedItemFilter, deleteFromDiscountSelectedItemFilter } = DropDownDiscountSelectedItemSlice.actions;
export default DropDownDiscountSelectedItemSlice.reducer;