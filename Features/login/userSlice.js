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
        clearUser: () => {
            state.value.user = []
            state.value.token = ''
            state.value.idUser = ''
        }
    }

})

export const { saveToken, clearUser } = loginSlice.actions

export default loginSlice.reducer