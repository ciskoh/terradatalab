# TerraDataLab website

Single-page site built with [Jekyll](https://jekyllrb.com) and hosted on GitHub Pages.
Languages: English (default, at `/`), German (`/de/`), French (`/fr/`), Italian (`/it/`).

## Where things are

| What | Where |
|---|---|
| **All page text** (one file per language) | `_data/i18n/en.yml`, `de.yml`, `fr.yml`, `it.yml` |
| Platform facts (modules, combinations table, e-mail, LinkedIn, images) | `_data/platform.yml` |
| Imprint / privacy policy text | `imprint.md`, `privacy-policy.md` (and the same files in `de/`, `fr/`, `it/`) |
| Colours, fonts, sizes | `assets/css/tokens.css` |
| Layout and section styles | `assets/css/main.css` |
| Page skeleton | `_layouts/` |
| One template per section (no text inside) | `_includes/sections/` |
| Module toggles + combinations table behaviour | `assets/js/platform.js` |
| Images / fonts | `assets/images/`, `assets/fonts/` |
| Site settings (URL, languages, excluded files) | `_config.yml` |

`docs/`, `MEMORY.md` and this README are not published.

## Editing text
Open the language file in `_data/i18n/` and change the text between the quotes. Don't rename the keys.
All four language files have the same keys.

## Local preview
Uses the conda environment `TDL_website` (Ruby 3.3, the same version GitHub Pages uses).

```bash
conda activate TDL_website
bundle install                # first time only; gems go to vendor/bundle
bundle exec jekyll serve      # http://localhost:4000
```

## Adding a language
1. Copy `_data/i18n/en.yml` to `_data/i18n/<code>.yml` and translate the values.
2. Create `<code>/index.html`, `<code>/imprint.md`, `<code>/privacy-policy.md` (copy the `de/` ones and change the permalinks).
3. Add the code to `languages:` and a `defaults:` entry in `_config.yml`.

## Deployment
GitHub Pages → *Deploy from a branch* (root folder). GitHub builds the site on every push.

When the custom domain is ready: set `url` in `_config.yml` to it (e.g. `https://www.terradatalab.net`),
keep `baseurl: ""`, add a `CNAME` file with the domain, and configure DNS.
For a project page without a custom domain (`https://<user>.github.io/<repo>/`) set `baseurl: "/<repo>"`.
