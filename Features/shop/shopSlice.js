import { createSlice } from "@reduxjs/toolkit";
import AllProducts from '../../Datos/products.json'

const initialState = {
    value: {
        carrito: [],
        products: AllProducts,
        // sinStock: []
    }
}

export const counterSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        pushCarrito: (state, actions) => {

            const productoExistenteCarrito = state.value.carrito.findIndex(product => product.id == actions.payload.id)
            
            const restarStock = () => {
                state.value.products == state.value.products.map(product => {
                    if(product.id == actions.payload.id) {
                        product.stock = product.stock - 1
                    }
                    return product
                })
            }
            
            if ( productoExistenteCarrito != -1) {
                let cantidad = state.value.carrito[productoExistenteCarrito].cantidad
                state.value.carrito[productoExistenteCarrito] = {...actions.payload, cantidad: cantidad + 1 }

                restarStock()
                return ;
            }
            
            restarStock()
            state.value.carrito.push({...actions.payload, cantidad: 1})
        }
    }

})

export const { pushCarrito } = counterSlice.actions

export default counterSlice.reducer