import { createSlice } from "@reduxjs/toolkit";

const DropDownBrandSelectedItemSlice = createSlice({
    name: "dropDownBrandSelectedItemFilter",
    initialState:{        
        dropDownBrandSelectedItem: ''     
      },  
    reducers: {
        addToBrandSelectedItemFilter: (state, action) => {
            state.dropDownBrandSelectedItem = action.payload
        },
        deleteFromBrandSelectedItemFilter: (state, action) => {
            state.dropDownBrandSelectedItem = null
        }
    }
});
export const { addToBrandSelectedItemFilter, deleteFromBrandSelectedItemFilter } = DropDownBrandSelectedItemSlice.actions;
export default DropDownBrandSelectedItemSlice.reducer;