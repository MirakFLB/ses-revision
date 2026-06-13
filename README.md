# SES Terminale — Révision Bac 2026

Site de révision **ludique** du programme officiel de Sciences économiques et sociales
(enseignement de spécialité, Terminale générale) pour le **baccalauréat 2026**.

## En ligne (à partager)

**https://mirakflb.github.io/ses-revision/** — pas de login, ouvre et joue. La progression est stockée localement dans le navigateur de chacun (`localStorage`), Mac comme Windows. Installable comme une appli.

## Ouvrir en local

Double-clique sur **`index.html`** — aucune installation, fonctionne hors ligne.
(Ou sers le dossier : `python -m http.server` puis ouvre http://localhost:8000.)

## Ce qu'il y a dedans

**Programme (12 chapitres, 3 parties)** — pour chaque chapitre, 4 onglets :
- **L'essentiel** : synthèse du cours + chiffres-clés sourcés.
- **Objectifs** : les objectifs d'apprentissage **officiels** (verbatim) à cocher — ou **validés en jouant** : chaque bonne réponse du chapitre fait monter l'anneau, et **8 bonnes réponses *différentes* = un objectif maîtrisé** (+10 écus ; répéter une même question ne compte pas). Une jauge par objectif montre l'avancement.
- **Notions** : définitions **sourcées** (INSEE, SES-ENS Lyon, Melchior, vie-publique, La finance pour tous, Observatoire des inégalités, Banque de France…), source affichée et cliquable.
- **Auteurs** : les théoriciens clés (Schumpeter, Ricardo, Marx, Weber, Bourdieu, Boudon, Olson, Tilly, Rawls, Nozick, Ostrom…).

**9 jeux** (onglet « Jouer & réviser »), avec une grosse banque de questions (**~239 QCM, ~159 Vrai/Faux, ~144 textes à trous** — plus de 540 questions, toutes avec explication) :
1. **QCM** — choix multiple, explication immédiate.
2. **Vrai / Faux** — rapide, avec justification.
3. **Cartes mémoire** — notion → définition, **répétition espacée (Leitner)**.
4. **Associations** — relier notion ↔ définition.
5. **Textes à trous** — compléter le mot manquant.
6. **Examen blanc** — mix QCM + Vrai/Faux **chronométré**, score final.
7. **Objectifs (auto-éval)** — « sais-je traiter cet objectif officiel ? ».
8. **Sprint 60 s** — un max de bonnes réponses en 60 secondes (chrono).
9. **Survie** — mort subite : enchaîne les QCM, une erreur et c'est fini.

**Gamification & Boutique** — gagne de l'**XP** (niveaux Lycéen → Major du Bac) **et des écus** 🪙 à chaque bonne réponse, avec **combos** (gains croissants en série), **sons**, **confettis**, **pop de pièces** et **bonus quotidien**. Dépense tes écus dans la **Boutique** : **11 thèmes/skins** qui relookent toute l'app, des **power-ups** (gel de série, boost ×2) et des **titres**. Plus : série de jours, objectif quotidien, 9 **badges**, records. Onglets **Profil & progrès** et **Boutique**.

**Méthode des épreuves**, **outils quantitatifs**, **recherche** (touche `/`).
Toute la progression est sauvegardée localement (localStorage).

## Officiel vs sourcé vs aide-mémoire

- **Officiel (verbatim)** : libellés des chapitres, objectifs d'apprentissage, savoir-faire quantitatifs, format des épreuves — *BO spécial n°8 du 25 juillet 2019* ; épreuve : *note de service consolidée (sept. 2024)*, session 2025+.
- **Sourcé** : les définitions des notions, les auteurs et les chiffres-clés portent leur **source de référence** (lien cliquable).
- **Aide-mémoire** (« Cours ») : le petit nombre de notions sans fiche de référence en ligne, et les formules des outils quantitatifs — clairement étiquetées.

## À retenir pour 2026

Depuis la session 2025, l'écrit ne porte que sur **9 des 12 chapitres** (rotation paires/impaires abrogée).
Non évaluables à l'écrit (mais au programme, utiles au Grand Oral) : *crises financières*, *action de l'École*, *justice sociale*.

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | coquille + navigation |
| `styles.css` | design (sombre, premium) |
| `data.js` | programme officiel (objectifs, méthode, outils) |
| `content.js` | cours, **notions sourcées**, auteurs, chiffres |
| `quiz.js` + `quiz2.js` + `quiz3.js` | banque de questions (QCM, Vrai/Faux, trous) |
| `app.js` | routing, progression, **moteur de jeu + gamification** |

Statique, sans build ni dépendance.
