import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
    name: "cart",

    initialState: {
        items: [  ]
    },

    reducers : {
        addItem: (state , action) => {
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            state.items.pop(action.payload)
        },

        ClearCart: (state) => {
            state.items = []
        },
    }




})

export const { addItem , removeItem , ClearCart } = cartslice.actions;
export default cartslice.reducer;