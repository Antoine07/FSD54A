// src/features/counterSlice.js
import { createSlice } from '@reduxjs/toolkit'

// souvent un createSlice c'est une fonctionnalité avec un état
// 1. Des données dans le state
// 2. De la logique dans les reducers
const lenNameSlice = createSlice({
  name: 'len-name',
  initialState: { len : 0, pos : null },
  reducers: {
    // Code métier state au départ initialisé avec initialState
    // Action permet de récupérer le payload valeur passées dans les fonctions du réducer comme lenName
    lenName : (state, action) => {
        const { name, index } = action.payload
        state.len =  name.length // modification du state
        state.pos =  index
    }
  },
});

// Exporter les actions générées par le slice
export const { lenName } = lenNameSlice.actions

// Exporter le reducer pour l'intégrer dans le store
export default lenNameSlice.reducer