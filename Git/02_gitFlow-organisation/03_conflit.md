# Scénario d'exemple :

**Contexte :**
- Antoine travaille sur l'authentification des utilisateurs dans la branche `feature/authentification`.
- Mathieu travaille sur le système de commentaires dans la branche `feature/commentaires`.

### Historique des événements :

1. **Antoine termine sa fonctionnalité et crée une Pull Request (PR) :**
   - Antoine fusionne la branche `feature/authentification` dans `main`.
   - Commandes utilisées :
     ```sh
     git checkout main
     git pull origin main
     git merge feature/authentification
     git push origin main
     ```

2. **Mathieu travaille sur le système de commentaires et tente de fusionner sa fonctionnalité :**
   - Avant de fusionner, Mathieu met à jour sa branche `main` locale :
     ```sh
     git checkout main
     git pull origin main
     ```

3. **Mathieu fusionne la branche `main` mise à jour dans sa branche `feature/commentaires` :**
   - Commandes utilisées :
     ```sh
     git checkout feature/commentaires
     git merge main
     ```
   - Un conflit survient car les deux branches ont modifié le même fichier.

### Résolution du conflit :

1. **Identifier les conflits :**
   - Git marque les conflits dans les fichiers concernés.
   - Utilisez `git status` pour voir quels fichiers sont en conflit.
     ```sh
     git status
     ```

2. **Résoudre les conflits manuellement :**
   - Ouvrez les fichiers en conflit dans votre éditeur de texte.
   - Cherchez les sections marquées par Git :
     ```plaintext
     <<<<<<< HEAD
     (Modifications de Mathieu)
     =======
     (Modifications d'Antoine)
     >>>>>>> main
     ```
   - Résolvez les conflits en gardant ou modifiant les parties nécessaires.
   - Enregistrez les fichiers après avoir résolu les conflits.

3. **Marquer les conflits comme résolus :**
   - Ajoutez les fichiers résolus à la zone de staging :
     ```sh
     git add [fichier_en_conflit]
     ```

4. **Finaliser le merge :**
   - Faites un commit pour finaliser le merge :
     ```sh
     git commit -m "Résolution des conflits entre main et feature/commentaires"
     ```

5. **Pousser les changements vers le dépôt distant :**
   - Poussez la branche mise à jour :
     ```sh
     git push origin feature/commentaires
     ```

### Finaliser le processus :

1. **Créer une Pull Request (PR) pour la fonctionnalité de Mathieu :**
   - Mathieu crée une PR pour fusionner `feature/commentaires` dans `main`.
   - Les autres développeurs révisent et approuvent la PR.
   - Fusionner la PR dans `main`.

2. **Suppression des branches de fonctionnalités (facultatif) :**
   - Après la fusion, supprimez la branche de fonctionnalité :
     ```sh
     git branch -d feature/commentaires
     git push origin --delete feature/commentaires
     ```

### Exemple de commandes utilisées par Mathieu pour gérer le conflit :

```sh
# Mettre à jour la branche main locale
git checkout main
git pull origin main

# Fusionner main dans feature/commentaires
git checkout feature/commentaires
git merge main

# Résoudre les conflits manuellement dans les fichiers concernés
# Marquer les conflits comme résolus
git add [fichier_en_conflit]

# Finaliser le merge
git commit -m "Résolution des conflits entre main et feature/commentaires"

# Pousser les changements vers le dépôt distant
git push origin feature/commentaires
```

### Schéma du flux de travail :

```plaintext
main
  |
  |-- feature/authentification (Antoine)
  |       \
  |        `--- (développement) --- PR --- merge
  |
  |-- feature/commentaires (Mathieu)
  |       \
  |        `--- (développement) --- merge main --- (conflit) --- résolution --- PR --- merge
  |
```
