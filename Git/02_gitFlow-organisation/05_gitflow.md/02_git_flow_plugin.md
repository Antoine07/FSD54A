# Introduction à Git Flow

Git Flow est un modèle de branchement pour Git qui propose une manière systématique de gérer le développement de fonctionnalités, les correctifs et les versions du logiciel. Il s'agit d'un ensemble de règles qui définissent comment organiser les branches dans un dépôt Git.

## Les Branches Principales de Git Flow

1. **main** : Contient l'historique officiel des versions.
2. **develop** : Contient les derniers développements pour la prochaine version.

## Les Branches de Support

1. **feature/** : Utilisé pour le développement de nouvelles fonctionnalités.
2. **release/** : Prépare les nouvelles versions.
3. **hotfix/** : Corrige les bugs des versions en production.

## Installation de Git Flow

Pour utiliser Git Flow, vous devez d'abord l'installer. Voici comment l'installer et l'initialiser dans un dépôt.

### Installation sur macOS

```bash
$ brew install git-flow-avh
```

### Installation sur Linux

```bash
$ sudo apt install git-flow
```

### Installation sur Windows

Vous pouvez installer Git Flow via Chocolately :

```bash
$ choco install git-flow-avh
```

### Initialisation de Git Flow

Dans le répertoire de votre projet, initialisez Git Flow :

```bash
$ git flow init
```

Répondez aux questions de configuration (vous pouvez généralement accepter les valeurs par défaut).

## Utilisation de Git Flow

### Exemple Concret

Supposons que nous travaillons sur un projet et que nous souhaitons développer une nouvelle fonctionnalité, préparer une nouvelle version, et corriger un bug en production. Voici comment utiliser Git Flow pour gérer ces tâches.

### 1. Développement d'une Nouvelle Fonctionnalité

#### Créer une Branche de Fonctionnalité

Pour commencer à travailler sur une nouvelle fonctionnalité, créez une branche `feature`.

```bash
$ git flow feature start new-feature
```

Cette commande crée et passe sur une nouvelle branche `feature/new-feature` basée sur `develop`.

#### Développer la Fonctionnalité

Faites vos modifications et commitez-les.

```bash
$ echo "Nouvelle fonctionnalité" > feature.txt
$ git add feature.txt
$ git commit -m "Ajout de la nouvelle fonctionnalité"
```

#### Terminer la Fonctionnalité

Une fois le développement terminé, terminez la branche de fonctionnalité. Cette commande fusionne la branche de fonctionnalité dans `develop` et supprime la branche de fonctionnalité.

```bash
$ git flow feature finish new-feature
```

### 2. Préparation d'une Nouvelle Version

#### Créer une Branche de Release

Pour préparer une nouvelle version, créez une branche `release`.

```bash
$ git flow release start 1.0.0
```

Cette commande crée et passe sur une nouvelle branche `release/1.0.0` basée sur `develop`.

#### Finaliser la Release

Faites les derniers ajustements et commitez-les.

```bash
$ echo "Version 1.0.0" > version.txt
$ git add version.txt
$ git commit -m "Prépare la version 1.0.0"
```

Terminez la branche de release. Cette commande fusionne la branche `release` dans `main` et `develop`, crée un tag pour la version, puis supprime la branche de release.

```bash
$ git flow release finish 1.0.0
```

### 3. Correction d'un Bug en Production

#### Créer une Branche de Hotfix

Pour corriger un bug en production, créez une branche `hotfix`.

```bash
$ git flow hotfix start fix-critical-bug
```

Cette commande crée et passe sur une nouvelle branche `hotfix/fix-critical-bug` basée sur `main`.

#### Corriger le Bug

Faites les corrections nécessaires et commitez-les.

```bash
$ echo "Correction du bug critique" > bugfix.txt
$ git add bugfix.txt
$ git commit -m "Corrige le bug critique"
```

#### Terminer le Hotfix

Terminez la branche de hotfix. Cette commande fusionne la branche `hotfix` dans `main` et `develop`, crée un tag pour la version corrigée, puis supprime la branche de hotfix.

```bash
$ git flow hotfix finish fix-critical-bug
```

## Commandes Git Flow Résumées

Voici un résumé des principales commandes Git Flow :

### Initialisation

```bash
$ git flow init
```

### Fonctionnalités

- **Démarrer une fonctionnalité** : `git flow feature start <feature-name>`
- **Terminer une fonctionnalité** : `git flow feature finish <feature-name>`

### Releases

- **Démarrer une release** : `git flow release start <release-version>`
- **Terminer une release** : `git flow release finish <release-version>`

### Hotfixes

- **Démarrer un hotfix** : `git flow hotfix start <hotfix-name>`
- **Terminer un hotfix** : `git flow hotfix finish <hotfix-name>`

## Conclusion

Git Flow offre une structure claire et organisée pour gérer le développement de fonctionnalités, les préparations de versions, et les corrections de bugs. En suivant ce modèle, les équipes peuvent travailler de manière plus efficace et cohérente, tout en maintenant une base de code propre et bien structurée.