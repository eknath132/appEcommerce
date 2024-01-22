import { configureStore } from "@reduxjs/toolkit";
import shopSlice from '../Features/shop/shopSlice'
import { ShopApi } from "./services/shopServices";
import { setupListeners } from "@reduxjs/toolkit/query";
import { LoginApi } from "./services/loginServices";
import loginSlice from "../Features/login/userSlice";

export const store = configureStore({
    reducer: {
        shop: shopSlice,
        login: loginSlice,
        [ShopApi.reducerPath]: ShopApi.reducer,
        [LoginApi.reducerPath]: LoginApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ShopApi.middleware, LoginApi.middleware),
})

setupListeners(store.dispatch)
