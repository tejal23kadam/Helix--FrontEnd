import { createSlice } from "@reduxjs/toolkit";

const RightSideOffcanvasSlice = createSlice({
    name: "rightSideOffCanvas",
    initialState: ({
        canvasState: false
    }),
    reducers: ({
        setCanvasState(state, action) {
            state.canvasState = !state.canvasState;
            console.log("state is " + state.canvasState)
        }
    })
})
export const { setCanvasState} = RightSideOffcanvasSlice.actions;
export default RightSideOffcanvasSlice.reducer;
