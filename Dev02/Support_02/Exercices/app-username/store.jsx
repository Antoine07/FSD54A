// src/store.js
import { configureStore } from '@reduxjs/toolkit';

// createSlice ~ counterSlice définit dans les features
import lenNameReducer from './features/lenNameSlice'
import nameReducer from './features/nameSlice'

const store = configureStore({
  reducer: {
    name: lenNameReducer,
    lenName: nameReducer,
  },
});

export default store;