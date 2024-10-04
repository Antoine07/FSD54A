import { configureStore } from '@reduxjs/toolkit';
import usersApi from './features/users';

export const store = configureStore({
    reducer: {
        users : usersApi
    }
});