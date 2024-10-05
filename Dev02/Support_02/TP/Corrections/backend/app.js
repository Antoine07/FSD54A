// Importation des modules nécessaires
import express from 'express';
import cors from 'cors'; // Middleware pour gérer les requêtes cross-origin
import { v4 as uuidv4 } from 'uuid'; // Importation du générateur d'UUID

// Initialisation de l'application Express
const app = express();
const port = 3000;

// Middleware pour analyser le JSON
app.use(express.json());

// Middleware CORS pour autoriser uniquement les requêtes venant du port 5173 (React)
app.use(cors({
  origin: 'http://localhost:5173'
}));

// Données simulées (in-memory)
let users = [
  { id: uuidv4(), name: 'John' },
  { id: uuidv4(), name: 'Jane' },
  { id: uuidv4(), name: 'Alice' },
];

// GET /users - Retourne tous les prénoms
app.get('/users', (req, res) => {
  res.json(users);
});

// GET /user/:id - Retourne un prénom par son ID
app.get('/user/:id', (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// POST /user - Ajoute un prénom
app.post('/user', (req, res) => {
  const newUser = {
    id: uuidv4(), // Génère un identifiant unique à l'aide de uuid
    name: req.body.name,
  };
  users.push(newUser); // Ajoute le nouvel utilisateur à la liste
  res.status(201).json(newUser); // Retourne l'utilisateur créé avec un statut 201 (Created)
});

// DELETE /user/:id - Supprime un prénom par son ID
app.delete('/user/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id == req.params.id);

  if (userIndex !== -1) {
    users = users.filter(user => user.id != req.params.id);
    res.status(204).json({
      id: req.params.id
    });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// PUT /user/:id - Met à jour un prénom par son ID
app.put('/user/:id', (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (user) {
    user.name = req.body.name;
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
