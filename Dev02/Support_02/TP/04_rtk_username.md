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
Voici deux nouvelles fonctionnalités que les étudiants pourraient ajouter à l'exercice :

4. Fonctionnalité de suppression de prénoms :
   - Ajoutez la possibilité de supprimer un prénom de la liste.
   - Créez une nouvelle action dans le `nameSlice` pour gérer la suppression d'un prénom.
   - Dans le composant `Name`, ajoutez un bouton de suppression à côté de chaque prénom. Lorsqu'un prénom est supprimé, la liste doit être mise à jour sans ce prénom.

5. Filtrage des prénoms par longueur :
   - Ajoutez un champ de saisie permettant de filtrer les prénoms en fonction de leur longueur (par exemple, afficher uniquement les prénoms ayant plus de 5 caractères).
   - Créez un état local dans un nouveau composant ou dans le store Redux pour stocker la valeur de filtre.
   - Mettez à jour la liste des prénoms affichée en fonction de ce filtre.

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
