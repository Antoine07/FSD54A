# Git Bisect : Localiser un Bug par Recherche Binaire

`git bisect` est une commande puissante de Git qui permet de localiser le commit exact ayant introduit un bug. Elle fonctionne en utilisant une méthode de recherche binaire pour tester les commits entre une version connue comme bonne et une version connue comme mauvaise. Cela réduit considérablement le nombre de commits à examiner.

## Introduction à `git bisect`

### Utilité de `git bisect`

Lorsque vous détectez un bug dans votre projet et que vous ne savez pas quand il a été introduit, `git bisect` peut vous aider à localiser rapidement le commit fautif. En marquant certains commits comme "bons" ou "mauvais", Git divise automatiquement l'historique des commits pour tester les commits intermédiaires.

### Commandes Principales

- **`git bisect start`** : Démarre la recherche binaire.
- **`git bisect bad`** : Marque le commit actuel comme mauvais (bug présent).
- **`git bisect good`** : Marque le commit actuel comme bon (bug absent).
- **`git bisect reset`** : Termine la recherche binaire et revient à l'état initial.
- **`git bisect log`** : Affiche le journal de la session de bisect en cours.
- **`git bisect visualize`** : Affiche graphiquement les commits en cours de bisect.
- **`git bisect run`** : Automatiser les tests avec un script.

## Exemple Détaillé

### Contexte

Imaginons que vous travaillez sur un projet et que vous avez découvert qu'un bug a été introduit à un certain moment. Vous savez que la version actuelle est mauvaise (bug présente), et vous savez qu'une ancienne version était bonne (sans bug). Vous allez utiliser `git bisect` pour trouver le commit fautif.

### Étapes à Suivre

#### 1. Démarrer `git bisect`

D'abord, placez-vous à la racine de votre dépôt et démarrez la session de bisect.

```bash
$ git bisect start
```

#### 2. Marquer le Commit Mauvais

Ensuite, marquez le commit actuel (celui avec le bug) comme mauvais.

```bash
$ git bisect bad
```

#### 3. Marquer un Commit Bon

Marquez un commit connu comme étant bon, où le bug n'était pas présent. Vous pouvez spécifier le SHA-1 du commit ou une référence comme `HEAD~n`.

```bash
$ git bisect good <commit-bon>
```

#### 4. Git Bisect en Action

Git va maintenant vérifier un commit intermédiaire. Vous devez tester ce commit et dire à Git s'il est bon ou mauvais.

- Si le commit est bon :

  ```bash
  $ git bisect good
  ```

- Si le commit est mauvais :

  ```bash
  $ git bisect bad
  ```

Répétez ce processus jusqu'à ce que Git identifie le commit fautif. À chaque étape, Git divise l'historique des commits restants pour réduire le nombre de commits à tester.

#### 5. Terminer `git bisect`

Une fois le commit fautif identifié, terminez la session de bisect et revenez à l'état initial.

```bash
$ git bisect reset
```

### Exemple Concret

Imaginons que le bug a été introduit quelque part entre `commit-a` (bon) et `commit-e` (mauvais).

1. **Démarrer la Session de Bisect**

   ```bash
   $ git bisect start
   ```

2. **Marquer le Commit Mauvais**

   ```bash
   $ git bisect bad HEAD
   ```

3. **Marquer un Commit Bon**

   ```bash
   $ git bisect good commit-a
   ```

4. **Tester les Commits Intermédiaires**

   Git choisit un commit intermédiaire à tester, par exemple `commit-c`.

   - Testez `commit-c`. Si `commit-c` est bon :

     ```bash
     $ git bisect good
     ```

   Git choisit alors un autre commit intermédiaire, par exemple `commit-d`.

   - Testez `commit-d`. Si `commit-d` est mauvais :

     ```bash
     $ git bisect bad
     ```

5. **Localiser le Commit Fautif**

   Git continue à tester les commits restants jusqu'à ce qu'il identifie le commit fautif. Une fois identifié, terminez la session de bisect.

   ```bash
   $ git bisect reset
   ```

### Utilisation de `git bisect run`

Pour automatiser le processus de test, vous pouvez utiliser `git bisect run` avec un script de test. Par exemple, si vous avez un script `test.sh` qui retourne 0 si le test est réussi et 1 si le test échoue :

```bash
$ git bisect start
$ git bisect bad HEAD
$ git bisect good <commit-bon>
$ git bisect run ./test.sh
```

Git exécutera automatiquement le script pour chaque commit intermédiaire et marquera les commits comme bons ou mauvais en fonction du résultat du script.

## Conclusion

`git bisect` est un outil incroyablement utile pour localiser rapidement les commits fautifs dans votre historique de commits. En utilisant une méthode de recherche binaire, il réduit considérablement le nombre de commits à examiner, ce qui permet de gagner du temps et d'efforts dans le processus de débogage. Que vous utilisiez des tests manuels ou des scripts automatisés, `git bisect` vous aide à identifier précisément quand un bug a été introduit dans votre codebase.