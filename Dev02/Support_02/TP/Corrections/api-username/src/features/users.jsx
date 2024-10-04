import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Création de la thunk asynchrone pour récupérer les utilisateurs
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch('http://localhost:3000/users');
  return response.json();
});

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
  },
  reducers: {
    hello : (state)=>{
        console.log('Hello')
    }
  },
  // Cette partie permet de gérer la récupération des données asynchrone avec fetchUsers 
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { hello } = userSlice.actions;

export default userSlice.reducer;