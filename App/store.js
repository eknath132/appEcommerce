import { configureStore } from "@reduxjs/toolkit";
import shopSlice from '../Features/shop/shopSlice'

export const store = configureStore({
    reducer: {
        shop: shopSlice
    }
})