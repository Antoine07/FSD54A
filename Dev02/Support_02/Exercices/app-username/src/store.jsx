// src/store.js
import { configureStore } from '@reduxjs/toolkit';

// createSlice ~ slice définit dans les features <=> le code métier
import lenNameReducer from './features/lenNameSlice';
import nameReducer from './features/nameSlice';

const store = configureStore({
  reducer: {

    // on rassemble les createSlice => on contextualisant on aura accès aux différents states

    // avoir accès à chaque state dans chaque createSlice
    name: nameReducer, 
    lenName: lenNameReducer,
  },
});

export default store;