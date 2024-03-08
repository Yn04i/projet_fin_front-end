import { createSlice } from "@reduxjs/toolkit";

export const darkSlice = createSlice({
    name:"dark",
    initialState:{
        dark : null,
    },
    reducers:{
        toggleDark : (state) => {
            state.dark = !state.dark
        }
    }
})

export const { toggleDark } = darkSlice.actions
export default darkSlice.reducer