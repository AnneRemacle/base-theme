Base theme
===


Installation
---------------

### Requirements

Dépendances nécessaires:

- [Node.js](https://nodejs.org/)

### Quick Start

Cloner ou télécharger ce repo, changer le nom en quelque chose d'autre puis suivre ces étapes pour remplacer le nom dans les templates.

1. Rechercher `'base-theme'` (entre guillements simples) pour trouver le text-domain et le remplacer par le nouveau.
2. Rechercher `base_theme_` pour trouver les noms de fonctions et les remplacer par le nouveau thème.
3. Rechercher `Text Domain: base-theme` dans `style.css` et remplacer avec: `Text Domain: [nouveau-theme]`.
4. Rechercher <code>&nbsp;base_theme</code> (avec un espace avant) pour trouver les DocBlocks et remplacer avec: <code>&nbsp;[nouveau-theme]</code>.
5. Rechercher `base_theme-` pour trouver les préfixes et remplacer avec: `nouveau-theme-`.
6. Rechercher `BASE_THEME_` (en majuscule) pour trouver les constantes et remplacer avec: `NOUVEAU_THEME`.


##Sass
[Documentation](https://sass-lang.com/)

##Arborescence des dossiers sources

	sources
		-- sass
			-- base
			-- components
			-- generic
			-- settings
			-- tools
			-- styles.scss
		-- js
			-- components
			-- main.js

Export dans le dossier build

[Norme rsscss](https://rscss.io/index.html) pour le nommage des classes
