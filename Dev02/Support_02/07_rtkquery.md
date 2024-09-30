# Cours sur RTK Query

## Partie 1 : Introduction à RTK Query

### Qu'est-ce que RTK Query ?

**RTK Query** est une puissante bibliothèque de gestion des requêtes API incluse dans **Redux Toolkit**. Elle simplifie le processus d'interaction avec les API en fournissant des abstractions pour le chargement, la mise en cache et la synchronisation des données.

### Avantages de RTK Query

1. **Simplification des requêtes** : Élimine le besoin de gérer manuellement les états de chargement et d'erreur.
2. **Mise en cache automatique** : Les données sont mises en cache pour éviter des requêtes inutiles.
3. **Invalidation des données** : Permet d'invalider les données en fonction des actions, garantissant que l'interface utilisateur affiche les informations les plus récentes.
4. **Optimisation des performances** : Réduit le nombre de requêtes effectuées grâce à la mise en cache.

### Installation

Pour utiliser RTK Query, il suffit d'installer Redux Toolkit :

```bash
npm install @reduxjs/toolkit react-redux
```

### Configuration de RTK Query

1. **Créer un API Slice** : Utilisez `createApi` pour définir les endpoints de votre API.

   ```javascript
   // src/services/apiSlice.js
   import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

   export const apiSlice = createApi({
       reducerPath: 'api',
       baseQuery: fetchBaseQuery({ baseUrl: 'https://api.example.com' }),
       endpoints: (builder) => ({
           getPosts: builder.query({
               query: () => '/posts',
           }),
           getPostById: builder.query({
               query: (id) => `/posts/${id}`,
           }),
       }),
   });

   export const { useGetPostsQuery, useGetPostByIdQuery } = apiSlice;
   ```

2. **Configurer le Store** : Ajoutez l'API slice à votre store Redux.

   ```javascript
   // src/app/store.js
   import { configureStore } from '@reduxjs/toolkit';
   import { apiSlice } from '../services/apiSlice';

   const store = configureStore({
       reducer: {
           [apiSlice.reducerPath]: apiSlice.reducer,
       },
       middleware: (getDefaultMiddleware) =>
           getDefaultMiddleware().concat(apiSlice.middleware),
   });

   export default store;
   ```

### Utilisation des Hooks

RTK Query génère automatiquement des hooks pour interroger vos endpoints.

```javascript
// src/components/PostList.jsx
import React from 'react';
import { useGetPostsQuery } from '../services/apiSlice';

const PostList = () => {
    const { data: posts, error, isLoading } = useGetPostsQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
};

export default PostList;
```

## Partie 2 : Fonctionnalités Avancées de RTK Query

### Mutations avec RTK Query

RTK Query permet également d'effectuer des mutations (ajout, mise à jour, suppression de données) facilement.

1. **Définir une mutation** :

   ```javascript
   // src/services/apiSlice.js
   endpoints: (builder) => ({
       // ... autres endpoints
       addPost: builder.mutation({
           query: (newPost) => ({
               url: '/posts',
               method: 'POST',
               body: newPost,
           }),
       }),
   });
   ```

2. **Utiliser la mutation** :

   ```javascript
   // src/components/AddPost.jsx
   import React, { useState } from 'react';
   import { useAddPostMutation } from '../services/apiSlice';

   const AddPost = () => {
       const [title, setTitle] = useState('');
       const [addPost] = useAddPostMutation();

       const handleSubmit = async (e) => {
           e.preventDefault();
           await addPost({ title });
           setTitle('');
       };

       return (
           <form onSubmit={handleSubmit}>
               <input 
                   type="text" 
                   value={title} 
                   onChange={(e) => setTitle(e.target.value)} 
                   placeholder="Post Title" 
               />
               <button type="submit">Add Post</button>
           </form>
       );
   };

   export default AddPost;
   ```

### Invalidation des Données

RTK Query facilite la mise à jour des données en invalidant le cache lorsque des mutations sont effectuées. Vous pouvez spécifier les endpoints qui doivent être invalidés.

```javascript
// src/services/apiSlice.js
endpoints: (builder) => ({
    // ... autres endpoints
    addPost: builder.mutation({
        query: (newPost) => ({
            url: '/posts',
            method: 'POST',
            body: newPost,
        }),
        // Invalider le cache pour les posts après ajout
        invalidatesTags: [{ type: 'Post', id: 'LIST' }],
    }),
    getPosts: builder.query({
        query: () => '/posts',
        providesTags: [{ type: 'Post', id: 'LIST' }],
    }),
}),
```

### Gestion des Erreurs

RTK Query fournit des mécanismes intégrés pour gérer les erreurs.

```javascript
const { data, error } = useGetPostsQuery();
if (error) {
    console.error('Error fetching posts:', error);
}
```

### Conclusion

RTK Query offre une manière efficace et simplifiée de gérer les requêtes API dans vos applications React. Avec des fonctionnalités avancées telles que les mutations, l'invalidation des données et la gestion des erreurs, RTK Query devient un outil incontournable pour le développement d'applications modernes.

