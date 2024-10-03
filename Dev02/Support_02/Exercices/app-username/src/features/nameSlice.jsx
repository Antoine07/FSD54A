// src/features/counterSlice.js
import { createSlice } from '@reduxjs/toolkit'

const nameSlice = createSlice({
    name: 'names',
    initialState: { names: [], message : '' },
    reducers: {
        addName: (state, action) => {
            state.message = ''
            if (!state.names.includes(action.payload))
                state.names.push(action.payload)
            else 
                state.message = `Ce prénom (${action.payload}) existe déjà`
        },
        setMessage : (state, action) => {
            state.message = action.payload
        }
    },
});

// Exporter les actions générées par le slice
export const { addName, setMessage } = nameSlice.actions

// Exporter le reducer pour l'intégrer dans le store
export default nameSlice.reducer