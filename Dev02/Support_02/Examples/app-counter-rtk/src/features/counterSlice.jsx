// src/features/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

// un createSlice gère un état spécifique avec ses actions, elles modifieront l'état du state
// ATTENTION les createSlices seront regroupés dans un store gloable
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 , step  : 2 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Exporter les actions générées par le slice
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Exporter le reducer pour l'intégrer dans le store
export default counterSlice.reducer;