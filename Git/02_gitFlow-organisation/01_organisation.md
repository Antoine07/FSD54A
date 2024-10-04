# Scénario d'exemple :

**Équipe de 2 développeurs** : Antoine et Mathieu.

**Projet** : Développer une application web avec les fonctionnalités suivantes :
- Authentification des utilisateurs
- Système de commentaires
- Tableau de bord utilisateur

## Configuration initiale :
1. **Créer un dépôt Git et initialiser la branche `main`** :
   ```sh
   git init
   git checkout -b main
   git remote add origin [url_du_dépôt]
   git push -u origin main
   ```

L'option -u dans la commande git push -u origin main n'est pas strictement nécessaire, mais elle est très utile. 

Cette option permet de définir la branche distante (ici origin/main) comme la branche de suivi par défaut pour la branche locale (ici main). 

Cela signifie que lors des futurs git push et git pull, vous n'aurez plus besoin de spécifier l'origine et la branche, car Git saura automatiquement où pousser et d'où tirer les changements.


2. **Chaque développeur clone le dépôt** :
   ```sh
   git clone [url_du_dépôt]
   ```

## Flux de travail pour les fonctionnalités :

### 1. **Antoine travaille sur l'authentification des utilisateurs** :
   - Créer une branche de fonctionnalité :
     ```sh
     git checkout -b feature_authentification
     ```
   - Développer la fonctionnalité et faire des commits réguliers :
     ```sh
     git add .
     git commit
     git add .
     git commit
     ```
   - Pousser les changements vers le dépôt distant :
     ```sh
     git push -u origin feature_authentification
     ```
   - Créer une Pull Request (PR) pour demander une révision et une fusion avec `main`.

### 2. **Mathieu travaille sur le système de commentaires** :
   - Créer une branche de fonctionnalité :
     ```sh
     git checkout -b feature_commentaires
     ```
   - Développer la fonctionnalité et faire des commits réguliers :
     ```sh
     git add .
     git commit -m "Ajout du modèle de commentaires"
     git add .
     git commit -m "Implémentation de l'affichage des commentaires"
     ```
   - Pousser les changements vers le dépôt distant :
     ```sh
     git push -u origin feature_commentaires
     ```
   - Créer une Pull Request (PR) pour demander une révision et une fusion avec `main`.

### 3. **Mathieu travaille sur le tableau de bord utilisateur** :
   - Créer une branche de fonctionnalité :
     ```sh
     git checkout -b feature_tableau-de-bord
     ```
   - Développer la fonctionnalité et faire des commits réguliers :
     ```sh
     git add .
     git commit
     git add .
     git commit
     ```
   - Pousser les changements vers le dépôt distant :
     ```sh
     git push origin feature_tableau-de-bord
     ```
   - Créer une Pull Request (PR) pour demander une révision et une fusion avec `main`.

## Fusions des Pull Requests (PR) :

1. **Révision et approbation des PR** :
   - Antoine et Mathieu révisent les PR de chacun.
   - Après approbation, chaque PR est fusionnée dans la branche `main` via l'interface GitHub ou avec la commande suivante :
     ```sh
     git checkout main
     git pull origin main
     # Exemple de plusieurs features à merger
     git merge feature_authentification
     git merge feature_commentaires
     git merge feature_tableau-de-bord
     git push origin main
     ```

2. **Suppression des branches de fonctionnalités** (facultatif) :
   ```sh
   git branch -d feature_authentification
   git branch -d feature_commentaires
   git branch -d feature_tableau-de-bord
   git push origin --delete feature_authentification
   git push origin --delete feature_commentaires
   git push origin --delete feature_tableau-de-bord
   ```

## Schéma du flux de travail :

```plaintext
main
  |
  |-- feature_authentification (Antoine)  -- PR 
  |       \
  |        `--- (développement) dev_login 
  |
  |-- feature_commentaires (Mathieu) -- PR 
  |       \
  |        `--- (développement) dev_forme
  |
  |-- feature_tableau-de-bord (Mathieu) -- PR  
  |       \
  |        `--- (développement) ... 
  |
```

