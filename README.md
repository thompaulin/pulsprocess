# Pulse & Process — site vitrine final

Site statique prêt pour GitHub + Vercel.

## Fichiers à importer à la racine du dépôt GitHub

- index.html
- pulse.html
- process.html
- artisanat.html
- realisations.html
- contact.html
- mentions-legales.html
- styles.css
- script.js
- README.md

Aucun dossier et aucune image locale ne sont nécessaires.

## Visuels

Les visuels du site sont des illustrations SVG intégrées directement dans le code HTML.
Avantage : aucun fichier image manquant, aucun problème de dossier, aucun lien cassé.

Pour remplacer un visuel par une vraie photo :
1. Uploade la photo à la racine du dépôt GitHub, par exemple : `sono-evenement.jpg`
2. Remplace le bloc SVG concerné dans la page par :
   `<img class="visual-svg" src="sono-evenement.jpg" alt="Description de l’image">`

## Déploiement

Après chaque modification sur GitHub, Vercel redéploie automatiquement le site.
