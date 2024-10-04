# Introduction à Git pour Débutants

Git est un système de contrôle de version distribué utilisé pour suivre les modifications dans le code source pendant le développement logiciel. Il permet à plusieurs développeurs de travailler sur un projet de manière simultanée sans écraser le travail des autres. Git est largement utilisé dans le développement logiciel en raison de sa flexibilité, de sa puissance et de sa capacité à gérer des projets de toutes tailles.

## Pourquoi Utiliser Git?

- **Suivi des Changements** : Git enregistre l'historique des modifications apportées aux fichiers, permettant de revenir à une version précédente si nécessaire.
- **Collaboration** : Git permet à plusieurs développeurs de travailler sur le même projet en parallèle, en facilitant la fusion des modifications.
- **Branches et Fusion** : Git permet de créer des branches pour développer des fonctionnalités ou corriger des bugs indépendamment du code principal, puis de fusionner ces modifications une fois terminées.
- **Distribution** : Git est un système distribué, ce qui signifie que chaque développeur a une copie complète de l'historique du projet.

## Installation de Git

### Installation sur macOS

```bash
$ brew install git
```

### Installation sur Linux

Pour les distributions basées sur Debian (comme Ubuntu) :

```bash
$ sudo apt install git
```

### Installation sur Windows

Téléchargez le programme d'installation de Git pour Windows depuis le site officiel : https://gitforwindows.org/.

## Configuration Initiale

Après avoir installé Git, configurez-le avec votre nom et votre adresse e-mail. Ces informations seront utilisées pour attribuer les modifications que vous apportez aux fichiers.

```bash
$ git config --global user.name "Votre Nom"
$ git config --global user.email "votre.email@example.com"
```

## Commandes de Base de Git

### Initialisation d'un Dépôt

Pour commencer à utiliser Git dans un projet, vous devez initialiser un dépôt Git. Allez dans le répertoire de votre projet et exécutez :

```bash
$ git init
```

Cette commande crée un nouveau sous-répertoire `.git` qui contient tous les fichiers nécessaires pour le suivi des versions.

### Clonage d'un Dépôt

Pour obtenir une copie locale d'un dépôt Git existant, utilisez la commande `git clone` :

```bash
$ git clone https://github.com/user/repo.git
```

Cette commande crée un nouveau répertoire nommé `repo` et télécharge tout l'historique de révision du dépôt.

### Enregistrement des Changements

#### Vérification de l'État

Pour voir les fichiers modifiés, les fichiers en cours de suivi et les fichiers non suivis, utilisez :

```bash
$ git status
```

#### Ajouter des Fichiers au Suivi

Pour ajouter des fichiers ou des modifications à l'index (zone de staging), utilisez :

```bash
$ git add <nom-du-fichier>
```

Pour ajouter tous les fichiers modifiés, utilisez :

```bash
$ git add .
```

#### Commettre des Modifications

Pour enregistrer les modifications dans l'historique du projet, utilisez :

```bash
$ git commit -m "Message de commit"
```

### Consultation de l'Historique

Pour afficher l'historique des commits, utilisez :

```bash
$ git log
```

Pour afficher l'historique de manière condensée, utilisez :

```bash
$ git log --oneline
```

### Gestion des Branches

#### Création d'une Nouvelle Branche

Pour créer une nouvelle branche, utilisez :

```bash
$ git branch <nom-de-la-branche>
```

#### Changer de Branche

Pour passer à une autre branche, utilisez :

```bash
$ git checkout <nom-de-la-branche>
```

#### Créer et Passer à une Nouvelle Branche

Pour créer une nouvelle branche et y basculer immédiatement, utilisez :

```bash
$ git checkout -b <nom-de-la-branche>
```

### Fusion des Branches

Pour fusionner une branche dans la branche courante, utilisez :

```bash
$ git merge <nom-de-la-branche>
```

### Suppression d'une Branche

Pour supprimer une branche, utilisez :

```bash
$ git branch -d <nom-de-la-branche>
```

## Exemples Concrets

### Exemple 1 : Initialisation et Premier Commit

1. **Initialisez un nouveau dépôt :**

   ```bash
   $ git init
   ```

2. **Ajoutez un fichier et enregistrez les modifications :**

   ```bash
   $ echo "Hello, Git!" > hello.txt
   $ git add hello.txt
   $ git commit -m "Ajoute le fichier hello.txt"
   ```

### Exemple 2 : Création et Fusion d'une Branche

1. **Créez une nouvelle branche pour une fonctionnalité :**

   ```bash
   $ git checkout -b feature-branch
   ```

2. **Apportez des modifications et commitez-les :**

   ```bash
   $ echo "Nouvelle fonctionnalité" > feature.txt
   $ git add feature.txt
   $ git commit -m "Ajoute une nouvelle fonctionnalité"
   ```

3. **Revenez à la branche principale et fusionnez la branche de fonctionnalité :**

   ```bash
   $ git checkout main
   $ git merge feature-branch
   $ git branch -d feature-branch
   ```

### Exemple 3 : Collaboration avec un Dépôt Distant

1. **Clonez un dépôt distant :**

   ```bash
   $ git clone https://github.com/user/repo.git
   ```

2. **Apportez des modifications et poussez-les vers le dépôt distant :**

   ```bash
   $ echo "Modification" > file.txt
   $ git add file.txt
   $ git commit -m "Modifie file.txt"
   $ git push origin main
   ```

3. **Récupérez les modifications depuis le dépôt distant :**

   ```bash
   $ git pull origin main
   ```

## Conclusion

Git est un outil puissant pour la gestion de versions et la collaboration sur les projets logiciels. En comprenant les commandes de base et les concepts fondamentaux, vous pouvez facilement suivre les modifications, collaborer avec d'autres développeurs et maintenir un historique propre et organisé de votre projet. En pratiquant et en utilisant Git régulièrement, vous deviendrez plus à l'aise avec ses fonctionnalités et ses flux de travail.