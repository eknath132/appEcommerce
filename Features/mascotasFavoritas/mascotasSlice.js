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
        buscarInfoFavorito: (state, actions) => {
            const newFavoritos = actions.payload.mascotas.filter(mascota => actions.payload.ids.includes(mascota.id)) 
            state.value.favoritos = newFavoritos
        }
    }

})

export const { buscarInfoFavorito } = mascotaSlice.actions

export default mascotaSlice.reducer