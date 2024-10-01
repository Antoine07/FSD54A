### Énoncé de l'exercice : Comprendre le démontage dans `useEffect`

**Objectif :**
Dans cet exercice, vous allez créer un petit composant React qui simule l'activation et la désactivation d'une minuterie. Vous allez explorer le concept de **démontage** avec le hook `useEffect`, en nettoyant les effets secondaires lorsque le composant est démonté ou réinitialisé.

### Étapes à suivre :

1. **État du compteur :**
   - Créez un état `count` qui démarre à 0 et qui sera incrémenté automatiquement toutes les secondes.

2. **Utilisation de `useEffect` pour créer une minuterie :**
   - Dans un `useEffect`, utilisez `setInterval` ou un `setTimeout` pour incrémenter la valeur de `count` toutes les secondes.

```js
// si vous utilisez le setInterval pensez à la syntaxe suivante pour la fonction de mise à jour du state
setCount( prevCount => preCount + 1 )
```

3. **Démontage du composant :**
   - Lorsque le composant est démonté, utilisez une **fonction de nettoyage** pour arrêter la minuterie avec `clearInterval` afin d'éviter que la minuterie continue de fonctionner après le démontage.

```js
React.useEffect(()=>{

   return () => {
      // faire quelque chose avant que le composant ne soit démonté
   }
}, [])
```

4. **Bouton d'activation/désactivation :**
   - Ajoutez un bouton permettant de monter ou démonter le composant contenant la minuterie.

### Exemple d'affichage :
```
Compteur : 10 secondes
[Déclencher/Arrêter le compteur]
```

### Code de l'exercice :

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <title>Exercice de démontage avec useEffect</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <!-- Babel pour le JSX -->
    <script src="https://unpkg.com/babel-standalone@latest/babel.min.js"></script>

    <style>
        .main {
            margin: 20px;
        }

        button {
            margin-top: 10px;
        }
    </style>
</head>

<body>
    <div id="root"></div>
    <script type="text/babel">
        const Timer = () => {

            return (
                <div>
                    <h1>Compteur :  secondes</h1>
                </div>
            );
        };

        const App = () => {

            return (
                <div className="main">
                
                </div>
            );
        };

        ReactDOM.createRoot(root).render(<App />)
    </script>
</body>

</html>
```

### Explication :

1. **Composant `Timer` :**
   - Ce composant affiche un compteur qui s'incrémente toutes les secondes.
   - Dans le `useEffect`, un `setInterval` est configuré pour incrémenter le compteur à chaque seconde. La fonction de nettoyage (`cleanup`) dans le `return` du `useEffect` utilise `clearInterval` pour stopper la minuterie lorsqu'elle n'est plus nécessaire, c'est-à-dire lorsque le composant est démonté.

2. **Composant `App` :**
   - Le composant principal `App` contient un bouton qui permet de monter ou démonter le composant `Timer`. En cliquant sur le bouton, vous pouvez démarrer ou arrêter le compteur.
   - Lors du démontage du composant `Timer` (en cliquant sur le bouton pour l'arrêter), la fonction de nettoyage s'exécute pour arrêter la minuterie.

### Ce que vous devez observer :
- **Montage du composant :** Lorsque vous cliquez sur "Déclencher le compteur", la minuterie démarre et le compteur s'incrémente toutes les secondes.
- **Démontage du composant :** Lorsque vous cliquez sur "Arrêter le compteur", le composant est démonté, la minuterie est stoppée (grâce à `clearInterval`), et vous devriez voir dans la console que la fonction de nettoyage est exécutée.
