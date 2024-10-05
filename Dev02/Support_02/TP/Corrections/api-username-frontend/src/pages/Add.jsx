import { useState } from "react"; // Importation du hook useState pour gérer l'état local dans le composant
import { useAddUserMutation } from "../features/users"; // Importation du hook personnalisé pour ajouter un utilisateur, fourni par Redux Toolkit
import { useNavigate } from 'react-router-dom'; // Importation du hook useNavigate pour rediriger l'utilisateur après soumission

// Composant Add qui permet d'ajouter un nouvel utilisateur
function Add() {
  // `username` stocke le nom de l'utilisateur à ajouter et `setUsername` permet de le modifier
  const [username, setUsername] = useState('');
  
  // `message` est utilisé pour afficher un message d'erreur ou de succès, `setMessage` le met à jour
  const [message, setMessage] = useState('');
  
  // `addUser` est une fonction pour déclencher la mutation d'ajout d'utilisateur, fournie par RTK Query
  const [addUser] = useAddUserMutation();
  
  // `navigate` permet de rediriger l'utilisateur vers une autre page après le succès de l'ajout
  const navigate = useNavigate();

  // Fonction qui gère la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du formulaire (rechargement de la page)

    // Vérifie que le champ `username` n'est pas vide
    if (username) {
      try {
        setMessage(''); // Réinitialise le message d'erreur avant d'ajouter l'utilisateur

        /**
         * `unwrap` permet de décompacter la réponse de Redux Toolkit Query.
         * Cela permet de gérer directement les erreurs sans avoir à manipuler des promesses non résolues.
         */
        await addUser({ name: username }).unwrap(); // Appel à l'API pour ajouter l'utilisateur
        setUsername(''); // Réinitialise le champ `username` après l'ajout

        navigate('/'); // Redirige l'utilisateur vers la page d'accueil après un ajout réussi

      } catch (err) {
        setMessage('Une erreur sur le serveur !!!'); // Affiche un message d'erreur si l'ajout échoue
      }
    }
  };

  return (
    <>
      {/* Si `message` contient du texte, il est affiché sous forme de message d'erreur en rouge */}
      {message && <p style={{ color: 'red' }}>{message}</p>}

      {/* Formulaire pour ajouter un utilisateur */}
      <form onSubmit={handleSubmit}>
        <input
          type="text" // Type du champ texte pour saisir le nom de l'utilisateur
          value={username} // Liaison du champ avec l'état `username`
          onChange={(e) => setUsername(e.target.value)} // Mise à jour de l'état `username` à chaque changement dans l'input
          placeholder="New User Name" // Texte affiché à l'intérieur du champ lorsqu'il est vide
        />
        {/* Bouton pour soumettre le formulaire */}
        <p><button>Add</button></p>
      </form>
    </>
  );
}

export default Add; 