# TP RTK 

### Objectif

Créer une application React qui permet d'ajouter des prénoms dans une liste et de calculer la longueur de chaque prénom. L'application utilise Redux Toolkit pour gérer l'état global de la liste des prénoms.

### Étapes de réalisation

1. **Créer un store Redux avec Redux Toolkit :**
   - Utilisez `createSlice` pour gérer une liste de prénoms dans Redux.
   - Ajoutez une action pour ajouter un prénom à la liste.
   - Configurez le store avec `configureStore`.

2. **Composant `Form` :**
   - Un formulaire avec un champ de saisie pour entrer un prénom.
   - Un bouton pour soumettre le prénom et l'ajouter à la liste.

3. **Composant `Name` :**
   - Affiche la liste des prénoms avec leur longueur respective.
   - Un bouton permettant de calculer la longueur de tous les prénoms ou un bouton par prénom permettant de calculer la longueur de chaque prénom.

```txt
// pour chaque prénom 
   name : Alan [bouton]  // 4
// ou alors pour les prénoms d'un seul coup

```

### Structure des fichiers (exemple)

```bash
src/
│
├── app/
│   └── store.js  # Configurer le store Redux
│
├── features/
│   └── names/
│       ├── nameSlice.js  
│       └── lenNameSlice.js   
│
 

...
```
