import { configureStore } from "@reduxjs/toolkit";
import shopSlice from '../Features/shop/shopSlice'
import { ShopApi } from "./services/shopServices";
import { setupListeners } from "@reduxjs/toolkit/query";
import { LoginApi } from "./services/loginServices";
import loginSlice from "../Features/login/userSlice";
import { PetApi } from "./services/mascotas";
import mascotaSlice from "../Features/mascotasFavoritas/mascotasSlice";

export const store = configureStore({
    reducer: {
        shop: shopSlice,
        login: loginSlice,
        pets: mascotaSlice,
        [ShopApi.reducerPath]: ShopApi.reducer,
        [LoginApi.reducerPath]: LoginApi.reducer,
        [PetApi.reducerPath]: PetApi.reducer,

    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ShopApi.middleware, LoginApi.middleware, PetApi.middleware),
})

setupListeners(store.dispatch)
