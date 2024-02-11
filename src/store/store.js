import { configureStore } from "@reduxjs/toolkit";

//all slice
import productSlice from "./productSlice";

const store = configureStore({
    reducer: {
        productStore : productSlice
    }
})


export default store;