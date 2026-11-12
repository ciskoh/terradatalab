# TerraDataLab website

Single-page site built with [Jekyll](https://jekyllrb.com) and hosted on GitHub Pages.
Languages: English (default, at `/`), German (`/de/`), French (`/fr/`), Italian (`/it/`).

Repository: <https://github.com/ciskoh/terradatalab> (branch `main`)

```bash
git clone https://github.com/ciskoh/terradatalab.git
```

`docs/` (private reference material) and `.claude/` are git-ignored, so they exist only in the local copy.

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
| Core Data Viewer video (plays when in view) | `assets/js/viewer-video.js` |
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

## Hidden pages
Reachable only by their address: not linked anywhere on the site, not in `sitemap.xml` (`sitemap: false`), kept out of search results (`noindex: true`).
Not secret: anyone with the link can open them, and bots that ignore `noindex` can still read them. Do not list them in `robots.txt` (it is public).
- **Platform details** — `/platform-x7k2q9/` → `platform-x7k2q9/index.html`, styles `assets/css/platform-details.css` (loaded via `extra_css` in the front matter), images `assets/images/platform/`, font `assets/fonts/exo2-latin-variable.woff2`.
  Made from a Claude Design export (master in `docs/`, not published); how to update it is described at the top of the page file.
- To remove a hidden page: delete its folder (and its CSS/images if no other page uses them).

## Search engines (sitemap, robots.txt, Search Console)
- `sitemap.xml` is generated automatically at every build (plugin `jekyll-sitemap` in `_config.yml`); `robots.txt` is at the root and points to it.
- Pages not ready yet (German, French and Italian pages, all privacy policies) carry two lines in their front matter, `sitemap: false` and `noindex: true`:
  they are left out of the sitemap and of search results, and not announced as translations. **When a page has content, delete those two lines.**
- Check after a deploy: <https://www.terradatalab.ch/sitemap.xml> and <https://www.terradatalab.ch/robots.txt>.

**Google Search Console (once):**
1. Go to <https://search.google.com/search-console>, sign in, *Add property* → **Domain** → `terradatalab.ch`.
2. Google shows a TXT record (`google-site-verification=…`). Add it in the DNS settings at the domain registrar, then click *Verify* (DNS changes can take up to a few hours).
3. In the property: *Sitemaps* → enter `https://www.terradatalab.ch/sitemap.xml` → *Submit*.
4. Optional: *URL inspection* → enter `https://www.terradatalab.ch/` → *Request indexing*.

**Bing Webmaster Tools (once, after Google):**
1. Go to <https://www.bing.com/webmasters>, sign in, choose **Import from Google Search Console**, allow access and select the site.
2. The site and its sitemap are taken over; check under *Sitemaps* that `sitemap.xml` is listed (otherwise add it there).

## Deployment
Every push to `main` triggers the GitHub Actions workflow `.github/workflows/jekyll-gh-pages.yml`,
which builds the site and deploys it to GitHub Pages. It can also be started by hand from the repository's *Actions* tab.
In the repository settings, *Pages → Source* must be set to *GitHub Actions*.

```bash
git add <files>
git commit -m "Describe the change"
git push                      # publishes the site
```

Without a custom domain the site is served at `https://ciskoh.github.io/terradatalab/`;
for that address `_config.yml` needs `baseurl: "/terradatalab"`, otherwise styles and links break.

When the custom domain is ready: set `url` in `_config.yml` to it (e.g. `https://www.terradatalab.net`),
set `baseurl: ""`, add a `CNAME` file with the domain, and configure DNS.
