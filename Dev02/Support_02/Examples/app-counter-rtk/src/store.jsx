// src/store.js
import { configureStore } from '@reduxjs/toolkit';

// createSlice ~ counterSlice définit dans les features
import counterReducer from './features/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;