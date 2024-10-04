# Créer des commits clairs et concis

Écrire des messages de commit clairs et informatifs est essentiel pour maintenir un historique de projet compréhensible et facile à naviguer. Voici quelques règles pour écrire de bons messages de commit :

1. **Utilisez un style impératif** : Écrivez les messages de commit comme si vous donniez des instructions. Par exemple, "Add new feature" au lieu de "Added new feature" ou "Adding new feature".

2. **Soyez concis mais descriptif** : Le titre du commit (la première ligne) doit être bref (50 caractères maximum) mais explicite sur ce que le commit accomplit. Si nécessaire, ajoutez une description plus détaillée après une ligne vide.

3. **Expliquez pourquoi et comment** : Dans la description, détaillez pourquoi ce changement était nécessaire et comment il résout le problème ou ajoute la fonctionnalité. Cela aide les autres (et vous-même) à comprendre les raisons derrière le changement.

4. **Un commit, un changement** : Essayez de faire un commit pour chaque changement logique distinct. Évitez les commits "fourre-tout" avec de multiples changements non liés.

----- 

5. **Utilisez les mots-clés pour lier aux issues** : Si votre commit résout un problème spécifique, mentionnez-le en utilisant les mots-clés appropriés comme "Fixes #123" ou "Closes #456" pour lier automatiquement le commit à l'issue correspondante.

----- 

6. **Capitalisez la première lettre** : Commencez la première ligne par une majuscule pour plus de lisibilité.

7. **Évitez les points à la fin du titre** : Les points finaux ne sont pas nécessaires dans les titres de commit.

8. **Soyez professionnel et courtois** : Évitez les abréviations, les blagues internes ou les commentaires non professionnels. Les messages de commit doivent être clairs et respectueux.

### Exemple d'un bon message de commit :

```
Refactor user authentication

- Replace old authentication method with OAuth2
- Improve security by using encrypted tokens
- Update user documentation with new login steps

Fixes #135
```

Ce message est clair, concis, et donne une bonne idée de ce que fait le commit et pourquoi il a été effectué.

En suivant ces règles, vous faciliterez la compréhension et la maintenance de l'historique de votre projet pour vous-même et pour les autres contributeurs.