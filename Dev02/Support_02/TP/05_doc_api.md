# Documentation de l'API Utilisateurs

Cette API permet de gérer une liste d'utilisateurs via des requêtes HTTP. Elle supporte les opérations CRUD (Create, Read, Update, Delete) et est conçue pour interagir avec un client en React exécuté sur le port `5173`.

## URL de base
```
http://localhost:3000
```

## Format des données
L'API accepte et retourne des données au format JSON.

## Routes de l'API

### 1. Récupérer tous les utilisateurs
- **Méthode** : `GET`
- **Endpoint** : `/users`
- **Description** : Retourne la liste complète des utilisateurs disponibles.

#### Exemples de réponse :
- **Code 200** : Liste des utilisateurs.
  ```json
  [
    { "id": 1, "name": "John" },
    { "id": 2, "name": "Jane" },
    { "id": 3, "name": "Alice" }
  ]
  ```

---

### 2. Récupérer un utilisateur par ID
- **Méthode** : `GET`
- **Endpoint** : `/user/:id`
- **Description** : Retourne les informations d'un utilisateur spécifique selon son ID.

#### Paramètres :
- `id` (path) : L'identifiant de l'utilisateur à récupérer.

#### Exemples de réponse :
- **Code 200** : Détails de l'utilisateur.
  ```json
  { "id": 1, "name": "John" }
  ```
- **Code 404** : Utilisateur non trouvé.
  ```json
  { "message": "User not found" }
  ```

---

### 3. Ajouter un nouvel utilisateur
- **Méthode** : `POST`
- **Endpoint** : `/user`
- **Description** : Ajoute un nouvel utilisateur à la liste.

#### Paramètres du body (JSON) :
- `name` (string) : Le prénom de l'utilisateur.

#### Exemple de requête :
```json
{
  "name": "Robert"
}
```

#### Exemples de réponse :
- **Code 201** : Utilisateur ajouté avec succès.
  ```json
  { "id": 4, "name": "Robert" }
  ```

---

### 4. Supprimer un utilisateur
- **Méthode** : `DELETE`
- **Endpoint** : `/user/:id`
- **Description** : Supprime un utilisateur selon son ID.

#### Paramètres :
- `id` (path) : L'identifiant de l'utilisateur à supprimer.

#### Exemples de réponse :
- **Code 204** : Utilisateur supprimé avec succès (pas de contenu dans la réponse).
- **Code 404** : Utilisateur non trouvé.
  ```json
  { "message": "User not found" }
  ```

---

### 5. Mettre à jour un utilisateur
- **Méthode** : `PUT`
- **Endpoint** : `/user/:id`
- **Description** : Met à jour le prénom d'un utilisateur spécifique.

#### Paramètres :
- `id` (path) : L'identifiant de l'utilisateur à mettre à jour.

#### Paramètres du body (JSON) :
- `name` (string) : Le nouveau prénom de l'utilisateur.

#### Exemple de requête :
```json
{
  "name": "Alice Updated"
}
```

#### Exemples de réponse :
- **Code 200** : Utilisateur mis à jour avec succès.
  ```json
  { "id": 3, "name": "Alice Updated" }
  ```
- **Code 404** : Utilisateur non trouvé.
  ```json
  { "message": "User not found" }
  ```

---

## Notes

- Cette API est configurée pour autoriser uniquement les requêtes venant du port `5173`, ce qui permet une interaction avec une application React exécutée localement sur ce port.
- Les données des utilisateurs sont stockées en mémoire (in-memory), donc toute modification apportée sera perdue lors du redémarrage du serveur. 

---

## Démarrage de l'API

Pour démarrer l'API, exécutez le serveur avec la commande suivante :
```bash
npm run start
```

Le serveur écoute sur le port `3000`.
