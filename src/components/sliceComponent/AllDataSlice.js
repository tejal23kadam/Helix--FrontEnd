import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import { fetchData } from '../sections/api';

export const fetchDatasAsync = createAsyncThunk(
    'users/fetchData',
    async () => {
      const response = await fetchData();
      return response;
    }
  );
const AllDataSlice = createSlice({
    name: "allData",
    initialState:{
        data: [],
        loading: false,
        error: null
      },   
      
    extraReducers: (builder) => {
        builder
           .addCase(fetchDatasAsync.pending, (state) => {
             state.loading = true;
             state.error = null;
           })
           .addCase(fetchDatasAsync.fulfilled, (state, action) => {           
             state.loading = false;
             state.data = action.payload;
           })
          .addCase(fetchDatasAsync.rejected, (state, action) => {
             state.loading = false;
             state.error = action.error.message;
           });
        },
});
//export const {} = AllDataSlice.actions;
export default AllDataSlice.reducer;