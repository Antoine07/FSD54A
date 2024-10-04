# Introduction à la Gestion des Branches sans Git Flow

Même sans utiliser l'outil Git Flow, vous pouvez suivre les mêmes principes pour organiser vos branches et vos flux de travail dans Git. Ce guide vous montrera comment gérer les branches principales et de support, et comment effectuer les tâches courantes telles que le développement de fonctionnalités, la préparation des versions et la correction des bugs.

## Branches Principales

1. **main** : Contient l'historique officiel des versions stables.
2. **develop** : Contient les derniers développements pour la prochaine version.

## Branches de Support

1. **feature/** : Utilisé pour le développement de nouvelles fonctionnalités.
2. **release/** : Prépare les nouvelles versions.
3. **hotfix/** : Corrige les bugs des versions en production.

## Configuration Initiale

Commencez par initialiser votre dépôt et créer les branches `main` et `develop` si elles n'existent pas déjà.

```bash
$ git init
$ git checkout -b main
$ git checkout -b develop
```

## Développement d'une Nouvelle Fonctionnalité

### Créer une Branche de Fonctionnalité

Pour commencer à travailler sur une nouvelle fonctionnalité, créez une branche `feature` basée sur `develop`.

```bash
$ git checkout develop
$ git checkout -b feature/new-feature
```

### Développer la Fonctionnalité

Faites vos modifications et commitez-les.

```bash
$ echo "Nouvelle fonctionnalité" > feature.txt
$ git add feature.txt
$ git commit -m "Ajout de la nouvelle fonctionnalité"
```

### Terminer la Fonctionnalité

Une fois le développement terminé, fusionnez la branche de fonctionnalité dans `develop`.

```bash
$ git checkout develop
$ git merge --no-ff feature/new-feature
$ git branch -d feature/new-feature
```

## Préparation d'une Nouvelle Version

### Créer une Branche de Release

Pour préparer une nouvelle version, créez une branche `release` basée sur `develop`.

```bash
$ git checkout develop
$ git checkout -b release/1.0.0
```

### Finaliser la Release

Faites les derniers ajustements et commitez-les.

```bash
$ echo "Version 1.0.0" > version.txt
$ git add version.txt
$ git commit -m "Prépare la version 1.0.0"
```

### Fusionner la Release

Fusionnez la branche `release` dans `main` et `develop`, puis créez un tag pour la version.

```bash
$ git checkout main
$ git merge --no-ff release/1.0.0
$ git tag -a 1.0.0 -m "Version 1.0.0"

$ git checkout develop
$ git merge --no-ff release/1.0.0
$ git branch -d release/1.0.0
```

## Correction d'un Bug en Production

### Créer une Branche de Hotfix

Pour corriger un bug en production, créez une branche `hotfix` basée sur `main`.

```bash
$ git checkout main
$ git checkout -b hotfix/fix-critical-bug
```

### Corriger le Bug

Faites les corrections nécessaires et commitez-les.

```bash
$ echo "Correction du bug critique" > bugfix.txt
$ git add bugfix.txt
$ git commit -m "Corrige le bug critique"
```

### Terminer le Hotfix

Fusionnez la branche `hotfix` dans `main` et `develop`, puis créez un tag pour la version corrigée.

```bash
$ git checkout main
$ git merge --no-ff hotfix/fix-critical-bug
$ git tag -a 1.0.1 -m "Version 1.0.1"

$ git checkout develop
$ git merge --no-ff hotfix/fix-critical-bug
$ git branch -d hotfix/fix-critical-bug
```

## Commandes Résumées

Voici un résumé des principales étapes et commandes :

### Initialisation

```bash
$ git init
$ git checkout -b main
$ git checkout -b develop
```

### Fonctionnalités

- **Créer une branche de fonctionnalité** : `git checkout -b feature/<name> develop`
- **Fusionner une branche de fonctionnalité** : `git checkout develop && git merge --no-ff feature/<name> && git branch -d feature/<name>`

### Releases

- **Créer une branche de release** : `git checkout -b release/<version> develop`
- **Fusionner une branche de release** : `git checkout main && git merge --no-ff release/<version> && git tag -a <version> -m "Version <version>" && git checkout develop && git merge --no-ff release/<version> && git branch -d release/<version>`

### Hotfixes

- **Créer une branche de hotfix** : `git checkout -b hotfix/<name> main`
- **Fusionner une branche de hotfix** : `git checkout main && git merge --no-ff hotfix/<name> && git tag -a <version> -m "Version <version>" && git checkout develop && git merge --no-ff hotfix/<name> && git branch -d hotfix/<name>`

## Conclusion

Même sans utiliser l'outil Git Flow, vous pouvez suivre une approche structurée pour organiser votre flux de travail Git. En utilisant des branches de fonctionnalité, de release, et de hotfix, vous pouvez gérer efficacement le développement de nouvelles fonctionnalités, la préparation des versions, et la correction des bugs. Cette méthode vous aide à maintenir un historique de commits propre et à collaborer efficacement avec votre équipe.