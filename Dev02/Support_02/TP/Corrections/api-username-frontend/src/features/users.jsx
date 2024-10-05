import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Nous créons une API avec `createApi` qui permet de gérer les requêtes vers un serveur et la gestion du cache.
export const usersApi = createApi({
  // `reducerPath` est le nom que nous donnons à cette API dans notre store Redux.
  reducerPath: 'usersApi',

  // `baseQuery` permet de définir la base des requêtes, ici l'URL de l'API à interroger.
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),

  // `tagTypes` permet de définir des types de tags pour la gestion du cache.
  // Ici, nous utilisons 'User' pour gérer le cache des utilisateurs.
  tagTypes: ['User'],

  // `endpoints` est une fonction qui permet de définir toutes les requêtes (endpoints) que notre API peut effectuer.
  endpoints: (builder) => ({
    
    // Première requête : obtenir la liste de tous les utilisateurs.
    getUsers: builder.query({
      // Cette fonction fait une requête GET à '/users' pour récupérer tous les utilisateurs.
      query: () => '/users',
      
      // `providesTags` associe un tag 'User' à la requête pour que Redux sache quoi faire en cas de mise à jour.
      providesTags: ['User'],
    }),

    // Deuxième requête : obtenir les détails d'un utilisateur spécifique par son ID.
    getUser: builder.query({
      // Cette fonction fait une requête GET à '/user/{id}' pour récupérer un utilisateur en particulier.
      query: (id) => `/user/${id}`,
      
      // On associe à nouveau un tag 'User' pour permettre l'invalidation du cache si besoin.
      providesTags: ['User'],
    }),

    // Troisième requête : ajouter un nouvel utilisateur.
    addUser: builder.mutation({
      // Cette fonction fait une requête POST à '/user' avec les données du nouvel utilisateur à ajouter.
      query: (newUser) => ({
        url: '/user',
        method: 'POST',
        body: newUser, // `body` est le contenu de la requête, ici les informations du nouvel utilisateur.
      }),

      // `invalidatesTags` permet d'invalider le cache des utilisateurs après cette requête.
      // Cela forcera le refetch des utilisateurs pour que la liste soit mise à jour.
      invalidatesTags: ['User'],
    }),

    // Quatrième requête : mettre à jour un utilisateur existant.
    updateUser: builder.mutation({
      // Cette fonction fait une requête PUT à '/user/{id}' pour modifier les informations d'un utilisateur spécifique.
      query: ({ id, ...user }) => ({
        url: `/user/${id}`,
        method: 'PUT',
        body: user, // `body` contient les nouvelles données de l'utilisateur.
      }),

      // Après la mise à jour d'un utilisateur, le cache des utilisateurs est invalidé pour rafraîchir les données.
      invalidatesTags: ['User'],
    }),

    // Cinquième requête : supprimer un utilisateur.
    deleteUser: builder.mutation({
      // Cette fonction fait une requête DELETE à '/user/{id}' pour supprimer un utilisateur en fonction de son ID.
      query: (id) => ({
        url: `/user/${id}`,
        method: 'DELETE',
      }),

      // Après la suppression d'un utilisateur, le cache est également invalidé pour rafraîchir la liste des utilisateurs.
      invalidatesTags: ['User'],
    }),
  }),
});

// Ici, nous exportons des hooks générés automatiquement par `createApi`
// qui peuvent être utilisés dans les composants React pour effectuer les requêtes définies.
export const {
  useGetUsersQuery,    // Hook pour obtenir la liste des utilisateurs.
  useGetUserQuery,     // Hook pour obtenir les détails d'un utilisateur spécifique.
  useAddUserMutation,  // Hook pour ajouter un utilisateur.
  useUpdateUserMutation, // Hook pour mettre à jour un utilisateur.
  useDeleteUserMutation, // Hook pour supprimer un utilisateur.
} = usersApi;
