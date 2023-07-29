import { configureStore } from "@reduxjs/toolkit";

import cartslice from "./cartSlice";
const store = configureStore({
    reducer:{
        cart : cartslice,
    }
});



export default store;