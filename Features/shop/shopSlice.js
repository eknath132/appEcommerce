import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        carrito: [],
    }
}

export const counterSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        pushCarrito: (state, actions) => {
            const productoExistenteCarrito = state.value.carrito.findIndex(product => product.id == actions.payload.id)
            
            if ( productoExistenteCarrito != -1) {
                let cantidad = state.value.carrito[productoExistenteCarrito].cantidad
                state.value.carrito[productoExistenteCarrito] = {...actions.payload, cantidad: cantidad + 1 }
                return ;
            }
            state.value.carrito.push({...actions.payload, cantidad: 1})
        }
    }

})

export const { pushCarrito } = counterSlice.actions

export default counterSlice.reducer