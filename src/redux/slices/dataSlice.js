import { createSlice } from "@reduxjs/toolkit"

const initialState = {}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        }
    }
})

export const {setData} = dataSlice.actions;
export default dataSlice.reducer;