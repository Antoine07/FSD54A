### Énoncé de l'exercice : Filtrage des noms de chats avec React et `useEffect`

### Étapes à suivre :

1. **Initialisation de l'état :**
   - Vous devez créer trois états :
     - `cats` : un tableau qui contiendra la liste des noms de chats.
     - `filter` : une chaîne de caractères permettant de filtrer la liste.
     - `filteredCats` : un tableau qui stockera la liste filtrée des chats, en fonction de la valeur de `filter`.

2. **Chargement des données (Noms des chats) :**
   - Utilisez le hook `useEffect` pour simuler le chargement des noms de chats après 1 seconde.
   - Lors du montage du composant, la liste des chats (`cats`) devra être initialisée avec des noms comme "Mittens", "Whiskers", "Shadow", "Luna", "Tiger".
   - Astuce : Vous pouvez utiliser `setTimeout` pour simuler un chargement asynchrone avec un délai.

3. **Affichage de la liste filtrée :**
   - Mettez en place un champ de saisie pour que l'utilisateur puisse filtrer la liste de chats en tapant un texte. Le filtrage doit être insensible à la casse (minuscule ou majuscule).
   - Utilisez un autre `useEffect` pour que chaque fois que la valeur de `filter` ou `cats` change, la liste des chats filtrés (`filteredCats`) soit mise à jour.

4. **Console Log et compréhension des dépendances :**
   - Placez un `console.log('ici', cats)` après le chargement des chats. Vous remarquerez que le `console.log` ne montre pas la liste mise à jour immédiatement après l'appel à `setCats`. Réfléchissez pourquoi cela se produit et corrigez si nécessaire.
   - Comprenez pourquoi les dépendances dans le `useEffect` (comme `cats` ou `filter`) sont importantes pour gérer les mises à jour des données.

### Exemple d'affichage :
```
Liste des noms de chats
[Input] Filtrer les noms : [___]
Liste filtrée :
- Luna
- Mittens
- Tiger
```

### Détails techniques :
- Utilisez les CDN de React et ReactDOM fournis dans le code HTML de départ.
- Utilisez le hook `useEffect` pour le chargement et le filtrage des chats.
- Faites attention à la gestion des dépendances dans vos `useEffect` pour comprendre comment React met à jour les valeurs lors du re-rendu.

### Fichier de départ :
Vous pouvez utiliser le code HTML suivant pour démarrer l'exercice. Il inclut React, ReactDOM et Babel pour que vous puissiez utiliser du JSX dans votre navigateur.

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <title>Hello React</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <!-- babel => compilation du JSX -->
    <script src="https://unpkg.com/babel-standalone@latest/babel.min.js"></script>
    <style>
        .heading {
            color: purple;
        }

        .main {
            margin: 20px;
        }

        .letter::first-letter {
            font-size: 1.2em;
            font-weight: bold;
        }
    </style>

</head>

<body>
    <div id="root"></div>
    <script type="text/babel">
        const App = () => {
            
            return (
                <div>
                    <h1>Liste des noms de chats</h1>
                  
                    <ul>
                       
                    </ul>
                </div>
            );
        };

        ReactDOM.createRoot(root).render(<App />)
    </script>
</body>

</html>
```
