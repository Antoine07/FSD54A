# TP : Gestion des Utilisateurs avec Redux Toolkit

## Objectif
L'objectif de ce TP est de créer une application React qui interagit avec une API Express pour gérer une liste d'utilisateurs. Les étudiants apprendront à utiliser Redux Toolkit pour la gestion d'état et à faire des appels API asynchrones.

## Partie 1 : Configuration de l'API

1. **Installer les dépendances nécessaires :**
   - Créez un nouveau projet Node.js et installez `express` et `cors`.
   - Utilisez le code API fourni ci-dessus pour mettre en place un serveur Express qui permet de gérer des utilisateurs.

2. **Lancer le serveur starter :**
   - Exécutez votre serveur en utilisant la commande `npm run start` 
     - Vous devez récupérer l'API sur le dépôt, dossier starter et installez les dépendances de l'API, avec un `npm install` (commande à exécuter dans le dossier `starter`)
  - Documention de l'API : [api users](./05_doc_api.md)
  
## Partie 2 : Création de l'application React

1. **Initialiser le projet React :**
   - Créez un nouveau projet React avec Vite.
   - Installez Redux Toolkit et React-Redux :
     ```bash
     npm install @reduxjs/toolkit react-redux
     ```

2. **Créer le store Redux :**
   - Créez un dossier `store` et un fichier `userSlice.js` à l'intérieur.
   - Dans `userSlice.js`, configurez le slice pour gérer l'état des utilisateurs (CRUD create, read, update, delete), utilisez la base ci-après pour gérer la récupération des users.

**remarques** : vous récupérez les users avec `fetchUsers` avec createAsyncThunk, le reste se fera directement dans React avec un createSlice et reducer classique, pour l'instant vous n'êtes pas en mesure d'interagir avec l'API Express et createAsyncThunk pour toutes les routes.

   ```javascript
   // module asynchrone pour récupérer les données distantes
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
          hello : (state) => {
            console.log('hello')
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
   ```

3. **Configurer le store :**
   - Dans votre fichier `main.js`, configurez le store Redux, pensez à créer un fichier `store.jsx`

4. **Créer le composant App :**
   - Dans `App.js`, créez un composant qui affiche la liste des utilisateurs, un formulaire pour ajouter un utilisateur, et des boutons pour supprimer et mettre à jour un utilisateur. Ajoutez également un filtre pour trier les utilisateurs par ordre alphabétique

6. **Mise en place d'un menu de navigation**
   - Ajoutez un menu de navigation en haut de votre application avec les items suivants : `home`, `add user`, `about`.
      - `home` on affiche tous les utilisateurs
      - `add user` ajoute un utilisateur
      - `about` présente l'équipe qui gère l'application

   Utilisez React Router pour naviguer entre ces pages.

## Partie 3 : 

1. **Gestion des Identifiants :**
   - Modifiez la logique de création d'un nouvel utilisateur pour s'assurer que l'identifiant de l'utilisateur est unique. Écrivez une fonction `generateUniqueId()` qui génère un identifiant unique basé sur les utilisateurs existants.
