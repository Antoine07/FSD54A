import { useState } from 'react'; // Importation du hook useState pour gérer l'état local
import { useGetUsersQuery, useDeleteUserMutation } from '../features/users'; // Importation des hooks générés par RTK Query pour obtenir et supprimer des utilisateurs

// Composant Home qui affiche la liste des utilisateurs et permet d'en supprimer
function Home() {
  // `useGetUsersQuery` est un hook généré par RTK Query pour récupérer les utilisateurs de l'API
  // `data: users` contient les utilisateurs, `error` gère les erreurs de la requête, et `isLoading` indique si les données sont en cours de chargement
  const { data: users, error, isLoading } = useGetUsersQuery();

  // `useDeleteUserMutation` est un hook pour supprimer un utilisateur via l'API
  const [deleteUser] = useDeleteUserMutation();

  // `message` stocke les messages d'erreur ou de confirmation lors de la suppression
  const [message, setMessage] = useState('');

  // Si les utilisateurs sont en cours de chargement, on affiche un message
  if (isLoading) return <div>Loading users...</div>;

  // Si une erreur survient lors de la récupération des utilisateurs, on affiche un message d'erreur
  if (error) return <div>Error fetching users.</div>;

  // Fonction qui gère la suppression d'un utilisateur
  const handleDeleteUser = async (id) => {
    try {
      setMessage(''); // Réinitialise le message avant d'effectuer l'opération

      /**
       * `unwrap` : Permet de décompacter la réponse et d'éviter les promesses non résolues,
       * ce qui facilite la gestion des erreurs et la réponse directe.
       */
      await deleteUser(id); // Suppression de l'utilisateur via l'API

    } catch (err) {
      setMessage('Une erreur sur le serveur !!!'); // Affiche un message d'erreur si la suppression échoue
      console.log(err); // Affiche l'erreur dans la console pour déboguer
    }
  };

  return (
    <>
      {/* Affiche un message d'erreur s'il y a une erreur lors de la suppression */}
      {message && <p style={{ color: 'red' }}>{message}</p>}

      {/* Affichage de la liste des utilisateurs */}
      <div>
        <h1>Users List</h1>
        <ul style={{ listStyle: 'none' }}>
          {/* Parcours des utilisateurs récupérés et affichage de chaque utilisateur avec un bouton de suppression */}
          {users && users.map((user) => (
            <li style={{ margin: 10, padding: 5 }} key={user.id}>
              {user.name} {/* Affiche le nom de l'utilisateur */}

              {/* Bouton pour supprimer l'utilisateur */}
              <button
                style={{ margin: 5, padding: 5 }}
                onClick={() => handleDeleteUser(user.id)} // Appel de la fonction de suppression au clic
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Home; // Exportation du composant pour l'utiliser dans d'autres parties de l'application
