import { createSlice } from "@reduxjs/toolkit";

const toastslice = createSlice({
        name: "toast",
        initialState: ({
                message: "",
                type: ""
        }),
        reducers: ({
                setToast(state, action) {                        
                        state.message = action.payload.message;
                        state.type = action.payload.type;
                },

                removeToast(state) {
                        state.message = "";
                        state.type = "";
                }
        })
})

export const{setToast,removeToast}=toastslice.actions;
export default toastslice.reducer;
