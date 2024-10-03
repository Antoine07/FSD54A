// Importation des modules nécessaires
import express from 'express';
import cors from 'cors';

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
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Alice' },
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
    id: users.length + 1,
    name: req.body.name,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// DELETE /user/:id - Supprime un prénom par son ID
app.delete('/user/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id == req.params.id);
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.status(204).send();
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
