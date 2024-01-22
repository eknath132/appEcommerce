import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        user: [],
        token: '',
        idUser:'',
    }
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        saveToken: (state, actions) => {
            const {user, token, idUser} = actions.payload
            state.value.user = user
            state.value.token = token
            state.value.idUser = idUser

        },
        // saveInfoUser: (state, actions) => {
            
        // }

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

export const { saveToken } = loginSlice.actions

export default loginSlice.reducer