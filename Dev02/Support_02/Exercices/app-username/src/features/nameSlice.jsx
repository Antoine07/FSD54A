// src/features/counterSlice.js
import { createSlice } from '@reduxjs/toolkit'

const nameSlice = createSlice({
    name: 'names',
    initialState: { names: [], message : '', sens : 1 },
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
        },
        orderName : (state, action) =>{
            const s = Math.abs( action.payload ) === 1 ? action.payload : action.payload
            state.sens = -1 * s
            state.names.sort((a, b) => s * a.localeCompare(b))
        },
        deletName : (state, action) =>{
            const index = action.payload
            state.names.splice(index, 1)
        }
    },
});

// Exporter les actions générées par le slice
export const { addName, setMessage, orderName, deletName } = nameSlice.actions

// Exporter le reducer pour l'intégrer dans le store
export default nameSlice.reducer