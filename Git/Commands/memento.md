# Mémento des Commandes Git Fondamentales

## Commandes de Plomberie

### Initialisation et Configuration

- **`git init`** : Initialise un nouveau dépôt Git ou réinitialise un dépôt existant.
  ```bash
  git init
  ```

- **`git config`** : Configure les options utilisateur, telles que le nom et l'email.
  ```bash
  git config --global user.name "Nom Utilisateur"
  git config --global user.email "email@example.com"
  ```

### Manipulation des Objets Git

- **`git hash-object`** : Calcule et affiche le SHA-1 d'un fichier.
  ```bash
  git hash-object <file>
  ```

- **`git cat-file`** : Affiche le contenu d'un objet Git (blob, tree, commit, tag).
  ```bash
  git cat-file -p <SHA-1>
  ```

- **`git update-index`** : Ajoute un fichier à l'index (zone de staging).
  ```bash
  git update-index --add <file>
  ```

- **`git write-tree`** : Écrit l'arbre de travail actuel dans la base d'objets Git.
  ```bash
  git write-tree
  ```

- **`git commit-tree`** : Crée un commit à partir d'un arbre de travail.
  ```bash
  git commit-tree <tree_sha1> -p <parent_commit_sha1> -m "Message du commit"
  ```

- **`git rev-parse`** : Résout les noms révisionnels en SHA-1.
  ```bash
  git rev-parse HEAD
  ```

### Informations sur les Révisions

- **`git rev-list`** : Liste les commits qui mènent à une ou plusieurs références.
  ```bash
  git rev-list <ref>
  ```

- **`git show-ref`** : Affiche toutes les références dans le dépôt.
  ```bash
  git show-ref
  ```

## Commandes de Porcelaine

### Configuration

- **`git config`** : Configure les options utilisateur (identique à la plomberie).
  ```bash
  git config --global user.name "Nom Utilisateur"
  git config --global user.email "email@example.com"
  ```

### Initialisation et Clonage

- **`git init`** : Initialise un nouveau dépôt Git ou réinitialise un dépôt existant (identique à la plomberie).
  ```bash
  git init
  ```

- **`git clone`** : Clone un dépôt existant.
  ```bash
  git clone <url>
  ```

### Enregistrement des Changements

- **`git add`** : Ajoute un fichier à l'index (zone de staging).
  ```bash
  git add <file>
  ```

- **`git commit`** : Enregistre les modifications dans l'historique du projet.
  ```bash
  git commit -m "Message du commit"
  ```

- **`git status`** : Affiche l'état actuel de l'arbre de travail et de l'index.
  ```bash
  git status
  ```

- **`git diff`** : Affiche les différences entre l'arbre de travail et l'index ou entre l'index et le dernier commit.
  ```bash
  git diff
  git diff --staged
  ```

### Historique

- **`git log`** : Affiche l'historique des commits.
  ```bash
  git log
  ```

- **`git show`** : Affiche des informations sur un objet Git (commit, tag, etc.).
  ```bash
  git show <commit>
  ```

### Gestion des Branches

- **`git branch`** : Liste les branches ou crée une nouvelle branche.
  ```bash
  git branch
  git branch <branch-name>
  ```

- **`git checkout`** : Change de branche ou restaure les fichiers dans l'arbre de travail.
  ```bash
  git checkout <branch-name>
  git checkout -b <new-branch-name>
  ```

- **`git merge`** : Fusionne une branche dans la branche courante.
  ```bash
  git merge <branch-name>
  ```

- **`git rebase`** : Rejoue les commits de la branche courante sur une autre base.
  ```bash
  git rebase <branch>
  ```

### Synchronisation avec un Dépôt Distant

- **`git remote`** : Gère les dépôts distants.
  ```bash
  git remote add <name> <url>
  ```

- **`git fetch`** : Récupère les modifications depuis un dépôt distant.
  ```bash
  git fetch <remote>
  ```

- **`git pull`** : Récupère les modifications et les fusionne dans la branche courante.
  ```bash
  git pull <remote> <branch>
  ```

- **`git push`** : Envoie les modifications vers un dépôt distant.
  ```bash
  git push <remote> <branch>
  ```

### Gestion des Tags

- **`git tag`** : Crée, liste, supprime ou vérifie un objet tag.
  ```bash
  git tag
  git tag <tag-name>
  git tag -d <tag-name>
  git push <remote> <tag-name>
  ```

### Réécriture de l'Historique

- **`git reset`** : Réinitialise l'index et l'arbre de travail.
  ```bash
  git reset --soft <commit>
  git reset --hard <commit>
  ```

- **`git revert`** : Annule les modifications introduites par un commit spécifique.
  ```bash
  git revert <commit>
  ```

- **`git cherry-pick`** : Applique un commit spécifique d'une branche à une autre.
  ```bash
  git cherry-pick <commit>
  ```

### Commandes Utilitaires

- **`git stash`** : Sauvegarde temporairement les modifications en cours.
  ```bash
  git stash
  git stash apply
  git stash drop
  ```

- **`git bisect`** : Utilisé pour trouver le commit qui a introduit un bug en utilisant une recherche binaire.
  ```bash
  git bisect start
  git bisect bad
  git bisect good <commit>
  ```
