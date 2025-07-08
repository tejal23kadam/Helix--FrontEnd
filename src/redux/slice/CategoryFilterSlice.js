import { createSlice } from "@reduxjs/toolkit";

const FilterSlice = createSlice({
    name: "categoryFilter",
    initialState:{        
        filterCategory: ''     
      },  
    reducers: {
        addToCategoryFilter: (state, action) => {
            state.filterCategory = action.payload
        },
        deleteFromFilter: (state, action) => {
            state.filterCategory = null
        }
    }
});
export const { addToCategoryFilter, deleteFromFilter } = FilterSlice.actions;
export default FilterSlice.reducer;