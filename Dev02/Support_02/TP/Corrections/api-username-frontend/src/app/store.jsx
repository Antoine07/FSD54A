import { configureStore } from '@reduxjs/toolkit'; // Importation de la fonction pour configurer le store Redux
import { usersApi } from '../features/users'; // Importation de l'API des utilisateurs créée avec RTK Query

// Configuration du store Redux
export const store = configureStore({
  // `reducer` est un objet qui regroupe tous les reducers utilisés par l'application
  reducer: {
    // `usersApi.reducerPath` est le nom du reducer généré automatiquement par Redux Toolkit Query pour notre API
    // `usersApi.reducer` gère l'état des requêtes pour les utilisateurs (comme les données, le cache, les statuts de chargement, etc.)
    [usersApi.reducerPath]: usersApi.reducer,
  },

  // `middleware` permet de personnaliser le middleware utilisé par Redux
  // Nous utilisons les middlewares par défaut, auxquels nous ajoutons celui de `usersApi` pour gérer les requêtes API
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});
