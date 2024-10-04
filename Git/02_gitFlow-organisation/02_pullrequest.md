# Pour créer une Pull Request (PR) sur GitHub, suivez ces étapes :

## 1. Créez et poussez une branche de fonctionnalité
Supposons que vous avez déjà créé et poussé votre branche de fonctionnalité :

```sh
git checkout -b feature/nouvelle-fonctionnalité
# Travaillez sur votre fonctionnalité, ajoutez et committez vos changements
git add .
git commit
git push origin feature/nouvelle-fonctionnalité
```

## 2. Aller sur GitHub
- Allez sur la page du dépôt GitHub correspondant.
- Vous verrez généralement une notification indiquant que votre branche récemment poussée est prête pour une Pull Request. Cliquez sur le bouton "Compare & pull request".

## 3. Créer la Pull Request
1. **Titre et Description** :
   - **Titre** : Donnez un titre significatif à votre PR qui décrit brièvement ce qu'elle fait.
   - **Description** : Décrivez en détail les changements que vous avez apportés, pourquoi vous les avez faits, et tout autre contexte pertinent. Vous pouvez utiliser des balises markdown pour formater votre description.
   
2. **Base et Comparaison** :
   - **Base** : Cette branche est généralement `main` ou une autre branche stable.
   - **Comparaison** : La branche de fonctionnalité que vous avez poussée (ex. `feature/nouvelle-fonctionnalité`).

3. **Assignez des réviseurs** :
   - Vous pouvez assigner des collègues pour revoir votre code. Ils recevront une notification et pourront commenter ou approuver votre PR.

4. **Labels, Projets, et Milestones** (facultatif) :
   - Ajoutez des labels pour catégoriser la PR.
   - Associez la PR à un projet ou une milestone si nécessaire.

5. **Créer la Pull Request** :
   - Cliquez sur le bouton "Create pull request" pour soumettre la PR.

## Exemple visuel des étapes sur GitHub :

1. **Notification de la nouvelle branche** :
   - ![GitHub Notification](https://user-images.githubusercontent.com/4822597/33173247-9bca29b0-d03d-11e7-8853-0e6f2a23b5d2.png)

2. **Formulaire de création de PR** :
   - ![Create Pull Request](https://user-images.githubusercontent.com/4822597/33173264-a8c27264-d03d-11e7-9b41-5c98e3c5f85d.png)

## 4. Collaborateurs révisent et fusionnent la PR
- Une fois la PR créée, les collaborateurs peuvent ajouter des commentaires, demander des changements ou approuver la PR.
- Après approbation, vous ou un collaborateur pouvez fusionner la PR en cliquant sur le bouton "Merge pull request".

## Fusionner la Pull Request
1. **Cliquer sur "Merge pull request"** :
   - Vous pouvez choisir de fusionner directement, effectuer un "Squash and merge" ou "Rebase and merge" en fonction des préférences du projet.
   - ![Merge Pull Request](https://user-images.githubusercontent.com/4822597/33173284-bc02c568-d03d-11e7-8b83-48255195d6e1.png)

2. **Confirmer la fusion** :
   - Confirmez l'action pour compléter la fusion.

## 5. Supprimer la branche de fonctionnalité (facultatif)
- Une fois fusionnée, vous pouvez supprimer la branche de fonctionnalité sur GitHub pour garder le dépôt propre.
- Cliquez sur "Delete branch" après la fusion.

## Récapitulatif des commandes pour l'intégration continue :
```sh
# Initialisation et push de la branche de fonctionnalité
git checkout -b feature/nouvelle-fonctionnalité
# Travaillez sur votre fonctionnalité, ajoutez et committez vos changements
git add .
git commit -m "Ajout de la nouvelle fonctionnalité"
git push -u origin feature/nouvelle-fonctionnalité

# Ouvrez la Pull Request sur GitHub, puis fusionnez après révision
# Supprimez la branche locale et distante si désiré
git branch -d feature/nouvelle-fonctionnalité
git push origin --delete feature/nouvelle-fonctionnalité
```

En suivant ces étapes, vous pouvez créer, soumettre et fusionner une Pull Request sur GitHub, tout en facilitant la collaboration avec votre équipe.