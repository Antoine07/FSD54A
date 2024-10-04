# Fetch 

1. **Ajouter le dépôt original comme un remote** :
   Vous devez d'abord ajouter le dépôt original comme un remote dans votre dépôt local. Supposons que le dépôt original est appelé `upstream`.

   ```sh
   git remote add upstream https://github.com/original-owner/original-repo.git
   ```

2. **Vérifier les remotes** :
   Assurez-vous que le remote `upstream` a bien été ajouté.

   ```sh
   git remote -v
   ```

   Vous devriez voir quelque chose comme :

   ```sh
   origin    https://github.com/your-username/your-forked-repo.git (fetch)
   origin    https://github.com/your-username/your-forked-repo.git (push)
   upstream  https://github.com/original-owner/original-repo.git (fetch)
   upstream  https://github.com/original-owner/original-repo.git (push)
   ```

3. **Récupérer les modifications depuis le dépôt original** :
   Utilisez la commande `fetch` pour récupérer les modifications depuis le dépôt original (`upstream`).

   ```sh
   git fetch upstream
   ```

4. **Fusionner les modifications dans votre branche locale `main`** :
   Basculez sur votre branche `main` et fusionnez les modifications récupérées.

   ```sh
   git checkout main
   git merge upstream/main
   ```

5. **Pousser les modifications vers votre dépôt forké** :
   Si vous voulez mettre à jour votre dépôt forké sur GitHub avec les modifications fusionnées, poussez les changements.

   ```sh
   git push origin main
   ```

Voici un résumé des commandes à utiliser :

```sh
git remote add upstream https://github.com/original-owner/original-repo.git
git remote -v
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```
