import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        favoritos: [],
    }
}

export const mascotaSlice = createSlice({
    name: 'mascotas',
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
        }, 
        buscarInfoFavorito: (state, actions) => {
            const newFavoritos = actions.payload.mascotas.filter(mascota => actions.payload.ids.includes(mascota.id)) 
            state.value.favoritos = newFavoritos
        }
    }

})

export const { buscarInfoFavorito } = mascotaSlice.actions

export default mascotaSlice.reducer