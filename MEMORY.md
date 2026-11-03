# TerraDataLab website: project memory

## 1. Log of scope & style updates (supersede the docs)

| Date | Source | Update |
|---|---|---|
| 2026-11-02 | CLAUDE.md rule 6 | Site must be compatible in structure and design with sister company UrbanDataLab (https://urbandatalab.ch). |
| 2026-11-02 | Wireframes PDF (30.09.2026), newer than the spec | Sitemap: Home (the Approach is folded in), Platform (Platform + Solutions merged), Resources (index + expansion-detail template), About. Contact page still open. Nav: Platform · Resources · About · "Let's talk". **→ Put on hold by the next row.** |
| 2026-11-02 | Matteo, task "build the folder structure" | **The site is a single page for now.** The copy draft is `docs/TerraDataLab One Page.dc.html` (sections: header/nav · Hero · Principles (#approach) · How we work · Modules (#modules, interactive toggles) · Combinations (#combinations, interactive matrix) · CTA · Footer). The multi-page sitemap above is parked. |
| 2026-11-02 | Matteo | **Design reference:** `docs/templates/combo-a-ledger-survey.html` (dark "night" palette, amber accent, Archivo + Atkinson Hyperlegible, ruled "ledger" lines, 1120px wrap). |
| 2026-11-02 | Matteo | **Structure reference:** `docs/templates/Consultant Template 3_ Survey.html` (wrap → header/nav → hero → band → section blocks → full-width contact band → footer; anchor nav; one CSS file with tokens on `:root`). |
| 2026-11-02 | Matteo | **Hosting:** GitHub Pages for now; a custom domain later (e.g. www.terradatalab.net / tdl.net). |
| 2026-11-02 | Matteo | **Legal pages:** imprint + privacy policy (empty for now). **No** figures band or case study for now. |
| 2026-11-02 | Matteo | **Local environment:** use conda env `TDL_website` for Jekyll and all tooling. |
| 2026-11-02 | Matteo | **Tech:** Jekyll (replaces Hugo). **Languages:** EN (default) + DE, FR, IT. **`docs/` stays private**: kept out of git. |
| 2026-11-02 | Matteo, task "first draft" | **Text source:** `docs/TerraDataLab_Website_Copy_Final.md`. **Graphics/look source:** `docs/single page version/TerraDataLab One Page.dc.html` (Ubuntu, forest green #2D5F3F, navy #0A0E27, white + #F5F7FA bands, 1200px wrap). This settles open point 2.8-2: the dark ledger palette is **not** used. English only for now. |
| 2026-11-02 | Matteo, section review | **General coherence rule: the site always speaks as "we", never "I"** (applies to all sections and languages; adapt any "I" in source copy). |
| 2026-11-03 | Matteo, section review | **Exception to the "we" rule:** personal bios in "Who we are" may use "I", and only there. |
| 2026-11-02 | Matteo, section review | **No eyebrows anywhere** (small labels above titles dropped in every section, as on urbandatalab.ch). **Contact e-mail:** m.jriva@urbandatalab.net (`contact_email` in `_data/platform.yml`) for all mailto buttons. |
| 2026-11-03 | Matteo, review #2 (§6) | **Site-wide:** tab title "TerraDataLab - data solutions for sustainability"; search snippet = hero subtitle; favicon + share image from `image001.png` (share image on white). |
| 2026-11-03 | Matteo, review #2 (§6) | **UrbanDataLab banner** (UDL blue #1c3f4a, "Looking for other use cases? Visit UrbanDataLab →"), home page only, under the header AND above the footer; the footer strip "Part of the UrbanDataLab family" is dropped. Spelling always **"UrbanDataLab"**. Phone header stays two rows (no burger menu). |
| 2026-11-03 | Matteo, review #2 (§6) | **Hero:** title "Trust your work. Give your project the tools to prove it."; tree image (`image001.png`) on the right. **How we work:** order title → platform hub (Core Data Viewer **video** `Screencast002.webm` + poster) → steps → button → paragraphs; Dynamic Monitoring one-liner "Compare your project area with reference sites, dynamically." |
| 2026-11-03 | Matteo, review #2 (§6) | **Solutions:** full module names in the table; on phones one card per combination with green module pills. **Who we are:** "Our values" heading; round b/w photos; second person **Patrick Schirmer** (Product & Platform Manager). **Legal:** imprint = Matteo's private address (no company), linked in the footer; Privacy link hidden until text exists; 404 texts set. |
| 2026-11-03 | Matteo, after deploy | **Core Data Viewer video plays at 2× speed** (`viewer_video_speed: 2` in platform.yml; 1 = normal). Video and poster are shown whole in their frame (never cropped). |

Notes on UrbanDataLab (checked 2026-11-02): built with Tilda (a hosted builder), English only, flat URLs: `/platform`, `/solutions`, `/resources`, `/imprint`, `/privacy-policy`, `/terms-and-conditions`.
→ We reuse its URL names and page pattern, not its technology.

The previous plan (Hugo + Netlify, multi-page) is **superseded** by the plan in section 2.

---

## 2. Previous task: build the folder structure (DONE 2026-11-02)

### 2.1 Proposed tool: Jekyll (GitHub Pages' built-in generator)
- **GitHub Pages builds Jekyll by itself**: push to the repo and the site is live. You don't need a build server, a GitHub Action or any installation to deploy. (Ruby/Jekyll is needed only if you want a local preview.)
- **Text and design stay separate (rule 5)**: all text goes in one YAML file per language (`_data/i18n/en.yml`), with one plain-language key per text block. Design is in `_layouts/`, `_includes/` and `assets/`, and the templates contain no copy.
- **Multiple languages (rule 5)**: adding a language means adding one text file (`de.yml`) plus a 3-line stub page (`de/index.html`). English stays at `/`, other languages go at `/de/`, `/fr/` …
- **Domain switch later**: every link uses Jekyll's `relative_url`. Moving from `<user>.github.io/<repo>/` to `www.terradatalab.net` means changing `url`/`baseurl` in `_config.yml` and adding a `CNAME` file. Nothing else.
- Alternative: Hugo (the earlier choice). It's also fine, but on GitHub Pages it needs a GitHub Action, and you would have to install it locally. For a single page, Jekyll is simpler.

### 2.2 Proposed tree
```
TDL_website/
├─ MEMORY.md                  this file (not published)
├─ README.md                  how to edit text, preview, deploy (not published)
├─ _config.yml                site settings: url/baseurl, languages, excluded folders
├─ Gemfile                    only for local preview (github-pages gem)
├─ .gitignore                 _site/, .jekyll-cache/ …
├─ index.html                 English page: front matter only (lang: en)
├─ <lang>/index.html          one stub per extra language (front matter only)
├─ 404.html
├─ docs/                      UNCHANGED reference material (excluded from the build)
│
├─ _data/                     ◀ TEXT & CONTENT DATA (human-readable YAML)
│  ├─ i18n/
│  │  ├─ en.yml               all English text, grouped by section:
│  │  │                         nav · hero · approach · how_we_work ·
│  │  │                         modules · combinations · cta · footer
│  │  └─ <lang>.yml           same keys, translated
│  └─ platform.yml            language-neutral facts: the 5 modules × 5
│                             combinations matrix (which module is in which
│                             combination), image file names, links, e-mail
│
├─ _layouts/                  ◀ DESIGN: page skeleton
│  ├─ default.html            <html lang>, <head>, header, footer
│  └─ onepage.html            lists the sections in order
├─ _includes/                 ◀ DESIGN: one file per section, no copy inside
│  ├─ head.html               meta, SEO/OpenGraph, hreflang, fonts, CSS
│  ├─ header.html             logo, anchor nav, "Let's talk", language switch
│  ├─ footer.html
│  └─ sections/
│     ├─ hero.html
│     ├─ approach.html        (Principles, 4 numbered items)
│     ├─ how-we-work.html     (3 steps; uses the template's "sprint" pattern)
│     ├─ modules.html         (toggle list + screenshot)
│     ├─ combinations.html    (matrix + expandable rows)
│     └─ cta.html             (full-width band, like the template's contact)
│
└─ assets/                    ◀ DESIGN: (folder already exists, empty)
   ├─ css/
   │  ├─ tokens.css           colours, fonts, spacing: the only place for values
   │  └─ main.css             layout + section styles
   ├─ js/
   │  └─ platform.js          module toggles + matrix rows (reads data-attributes;
   │                          contains no text, so it works in every language)
   ├─ fonts/                  self-hosted webfonts (avoids Google Fonts tracking,
   │                          relevant for Swiss nDSG / GDPR)
   └─ images/                 logo, favicon, screenshots for the 6 image slots
                              in the draft (Core Data Viewer + 5 combinations)
```

### 2.3 How the pieces connect (example)
`_data/i18n/en.yml` → `hero: { eyebrow: "...", title: "...", cta_primary: "..." }`
`_includes/sections/hero.html` → `<h1>{{ t.hero.title }}</h1>`. The template only references keys, so to fix a typo you edit the YAML and nothing else.

### 2.4 Scope of this step
- Create the folders and files above as **skeletons**: working Jekyll wiring, empty section templates with the right HTML landmarks, `tokens.css` with the variable *names* only, YAML files with the **keys only (empty values)**.
- **No new text is written (rule 4).** Moving the draft copy into `en.yml` is a separate step that needs your OK.
- Nothing outside the project folder is touched (rule 2). `docs/` is not changed.
- No git/GitHub actions (repo creation, push, Pages settings) without your go-ahead.
- Copywriter + web-designer agents: they come in at the next steps (filling `en.yml` and building the design). They aren't needed for the bare scaffold.

### 2.5 Points to flag
- **The two references differ from the draft's look.** The draft uses Ubuntu, forest green #2D5F3F and a white background (closer to UDL). `combo-a-ledger` is dark with amber. Folder structure doesn't depend on this, but the design step will: dark ledger look, or ledger *layout* with the TDL/UDL colours?
- **Template sections missing from the draft**: the "band" (headline figures) and the "Recent result" case study have no copy in the draft. I'll leave them out unless you want empty slots for them.
- **`docs/` and public repos**: GitHub Pages on a free account needs a public repo, so `docs/` (drafts, spec, deck) would be visible on GitHub even though it is excluded from the site. Option: keep `docs/` out of git via `.gitignore`.
- The draft's footer has "Privacy · Terms · Imprint", and Swiss/EU sites normally need an imprint and a privacy page. These would be two extra small pages. They aren't in this step unless you say so.

### 2.6 Open questions for Matteo
1. Jekyll (recommended) or Hugo? → **Jekyll** (2026-11-02)
2. Which languages besides English? → **DE, FR, IT** (2026-11-02). EN at `/`, then `/de/`, `/fr/`, `/it/`.
3. Should `docs/` be kept out of the git repo? → **Yes**, add it to `.gitignore` (2026-11-02)
4. a) Imprint + privacy-policy pages → **Yes**, as empty skeletons in all 4 languages (`/imprint/`, `/privacy-policy/`, `/de/imprint/` …). b) Figures band / case study → **Not available for now**: left out (2026-11-02).

### 2.7 Outcome (2026-11-02)
- Scaffold built as in 2.2, plus `imprint.md` / `privacy-policy.md` per language (Markdown: front matter + text body, layout `_layouts/legal.html`, which is also used by `404.html`).
- All text keys exist and are **empty** in `en/de/fr/it.yml`. `platform.yml` holds only ids + the module/combination matrix and default state (taken from the draft's logic, not prose).
- `tokens.css` has token **names only** (values wait for the design decision). `main.css` has structural layout only. `platform.js` reproduces the draft's toggle/matrix behaviour and reads all names from the page.
- Header nav has only the 3 anchor links that exist (Approach, Modules, Combinations). The draft's "Resources" / "About" (not links in the draft) are left out until those pages exist. Footer: LinkedIn (only if a URL is set) · Privacy · Imprint. "Terms" is left out (no page requested).
- Environment: conda env `TDL_website` with conda-forge `ruby=3.3` (matches GitHub Pages; Ruby 4.0 broke Jekyll 3.x), `compilers`, `make`, `pkg-config`, and bundler. Gems in `vendor/bundle` (git-ignored). `bundle exec jekyll build` succeeds: 13 pages, `docs/` not published. `theme: null` set to suppress the GitHub Pages default theme CSS.
- Not tested in a browser yet: the JS behaviour and the look (no design values yet).

### 2.8 Next steps (need Matteo's go-ahead)
1. Copy step: copywriter agent moves the draft copy **verbatim** into `en.yml`. DE/FR/IT translations come later.
2. Design step: web-designer agent fills `tokens.css` / `main.css`. **Decision first:** dark ledger palette vs. the draft's Ubuntu + #2D5F3F (UDL-compatible) look.
3. Git: `git init`, create the GitHub repo, enable Pages (outward-facing: only on Matteo's OK).

---

## 3. Current task: first draft of the page (English), DRAFT DONE; large style items (§3.8) await Matteo

### 3.1 Sources
- **Text:** `docs/TerraDataLab_Website_Copy_Final.md`, copied **verbatim** (rule 4: no text is invented).
- **Graphics:** `docs/single page version/TerraDataLab One Page.dc.html` (identical to `docs/TerraDataLab One Page.dc.html`). It contains no image files, only 6 empty image slots and a CSS parallelogram logo. "Graphics" here means the colours, type, layout, section patterns, logo shape, toggles and matrix.

### 3.2 Mismatch between the two sources (needs a decision, see 3.5)
| Draft page section | Copy_Final.md |
|---|---|
| Hero: eyebrow, title, 2 buttons | Headline, subheader, "the offer", CTA. Fits; needs 2 new keys (`subtitle`, `offer`). |
| Principles (4 items) | nothing |
| How we work (3 steps) | partly, in "How it works" ¶1 (workshop → build) |
| Platform: 5 module toggles + 3 benefits | headline + 3 paragraphs + CTA; no module names or descriptions |
| Solutions: 5 combinations × 5 modules matrix | 3 different tools (Field Traceability, Dynamic Monitoring, Weather Scenarios): short description, "what it does", 3 benefits each |
| CTA band | "Ready to talk about your project?" + "→ See it in action". Fits. |
Copy has no text for: meta title/description, nav labels, hero eyebrow, footer labels, 404 text, image alt texts.

### 3.3 Steps (after approval)
1. **Copywriter agent** fills `_data/i18n/en.yml` verbatim from the agreed sources and adjusts keys to the agreed section structure. Keys with no source text stay empty and are listed in the report.
2. **Web-designer agent** fills `tokens.css` (draft values) and `main.css`, and adapts `_includes/sections/*` to the agreed structure. Templates hide any element whose text is empty. Ubuntu webfont is self-hosted in `assets/fonts/` (Ubuntu Font Licence; no Google Fonts call, for nDSG/GDPR).
3. Build with `bundle exec jekyll build` in conda env `TDL_website`, then check the page in a local preview (layout + toggles/matrix JS).
4. **Style-revisor agent** compares with https://urbandatalab.ch (colours, type, spacing, nav, buttons, footer, section rhythm). Simple fixes get applied; larger ones are logged here in 3.6 for Matteo.
5. DE/FR/IT stay empty. No git/GitHub actions.

### 3.4 Not changed
`docs/`, anything outside the project folder, the language structure.

### 3.5 Open questions for Matteo
1. Structure → **Copy drives the structure** (2026-11-02): Hero → Platform → Solutions (3 tool cards) → CTA band → footer, all in the draft's look. Principles, How we work, module toggles and the combinations matrix are **parked**: their templates, keys and `platform.js` stay in the repo, but they are not included on the page.
2. UI labels missing from the copy → **use the draft HTML's wording verbatim** (2026-11-02). Anything in neither source stays empty.

### 3.6 Agreed page structure and text keys (en.yml)
| Section (anchor) | Keys | Source |
|---|---|---|
| header | `nav.platform` "Platform", `nav.solutions` "Solutions", `nav.cta` "Let's talk" | draft |
| hero (#top) | `hero.eyebrow` (draft "Carbon MRV · Data integration"), `hero.title`, `hero.subtitle`, `hero.offer`, `hero.cta_primary` (copy), `hero.cta_secondary` (draft "Explore the platform" → #platform) | copy + draft |
| platform (#platform) | `platform.eyebrow` (draft "Platform"), `platform.title`, `platform.body` (3 paragraphs), `platform.cta` | copy |
| solutions (#solutions) | `solutions.eyebrow` (draft "Solutions"), `solutions.title`, `solutions.what_label` "What it does", `solutions.benefits_label` "Key benefits", `solutions.items.<id>.{name, short, what, benefits[3]}` for ids `field_traceability`, `dynamic_monitoring`, `weather_scenarios` | copy |
| cta band | `cta.title`, `cta.button` | copy |
| footer | `footer.linkedin` "LinkedIn", `footer.privacy` "Privacy", `footer.imprint` "Imprint" | draft |
Empty (no source): `meta.description`, `nav.language`, `nav.skip`, `footer.copyright`, `not_found.*`. `meta.title` falls back to "TerraDataLab".
The copy's "Notes for designer" (Hero + Platform are the conversion sections; Solutions are secondary; all CTAs lead to a workshop/discovery conversation) guide the layout.
**Missing fact:** `contact_email` in `platform.yml` is empty, so every CTA is a `mailto:` with no address until it is set.

### 3.7 Outcome so far (2026-11-02)
- **Copywriter:** en.yml filled verbatim. Only changes: quotes stripped, tool names in title case, labels "What it does" / "Key benefits" from the copy headings. de/fr/it have identical keys, all empty. Parked keys moved to the end of en.yml. `platform.yml` has a `solutions` list (images empty); modules/combinations marked parked.
- **Points for Matteo:** hero subtitle says "I've seen it all" (first person; rest of page says "we"), kept as written. Empty: meta description, skip-link, language label, copyright, 404 text. `contact_email` still empty.
- **Web designer:** new `platform.html` (2 columns: heading left, 3 paragraphs + CTA right, grey band) and `solutions.html` (3 rule-topped numbered columns). Ubuntu self-hosted from @fontsource/ubuntu@5.1.0 (+ UFL licence). Tokens = draft values. Own choices: hero subtitle 19px, offer line 21px green, benefit bullets = small green parallelograms (echo of the logo), navy hover on buttons, styled language switch, phone header in 2 rows. Footer has only Privacy · Imprint (+ LinkedIn when a URL is set).
- Build OK; checked at 1280 / 390 / 360px.
- Next: style-revisor vs urbandatalab.ch (findings → §3.8).

### 3.8 Style review vs urbandatalab.ch (2026-11-02)
UDL reference (from its Tilda CSS): Ubuntu (titles weight 400, buttons 700), hero title 62px, section titles 40px, descriptions 20–22px; dark teal #1c3f4a text + footer, orange accent #f5734c; buttons filled, radius 15px, height 60px; section padding 60/90px; full-width hero photo with teal overlay and a translucent fixed header; images/icons throughout; 4-column teal footer; 1200px container.
Already compatible: Ubuntu, white page + very light alt bands, 1200px width, left-aligned hero with a filled accent button, text-left/button-right contact band, imprint/privacy URLs, body line-height 1.55, item headings at 500. Own accent (green vs orange) = legitimate sister-brand difference.

**Simple fixes APPLIED** (tokens.css / main.css; pre-change copies in the session scratchpad):
- Titles (h1, section h2, band h2) weight 500 → 400; line-heights 1.05/1.08/1.12 → 1.17/1.23/1.23; negative letter-spacing → 0.
- h1 max 68 → 62px; h2 max 52 → 40px; band h2 max 44 → 32px; ledes 17 → 20px; hero subtitle 19 → 20px; nav 15 → 16px.
- Buttons: radius 4 → 15px, height 52/54 → 60px, weight 500 → 700, padding 26/28 → 40px. Primary hover now lighter green #3d7a52 (new token `--color-accent-hover`) instead of navy.
- Section spacing 120 → 90px; CTA band padding 104 → 56px (slimmer, like UDL's contact band).
- Footer text #aeb4c0 → white; footer link hover = underline. Image radius 12 → 18px.

**LARGE items: need Matteo's decision (not implemented)**
- A. Hero: UDL uses a full-width photo + dark overlay + white text, with a translucent header over it. TDL has a white hero and no image. Biggest family-resemblance gap; needs an image.
- B. Dark colour: TDL navy #0A0E27 (text, footer) vs UDL dark teal #1c3f4a. Switch to a dark green-teal? (Brand decision; the code change is 2–3 tokens.)
- C. Footer: UDL has 4 columns (logo + ©, Legal, Products, Contact with e-mail/phone, orange column titles). Needs ©, e-mail, phone, column labels: text not in the sources.
- D. Phone header: UDL uses a burger menu; TDL shows a 2-row header.
- E. Imagery: UDL uses 65px SVG icons per item and rounded screenshots. TDL has none (solution cards could get icons/images).
- F. Logo: UDL uses an image logo; TDL has a CSS parallelogram + wordmark. Needs a real logo file.
- G. Extra UDL blocks (why-us band, client logos, newsletter, slogan photo band): all need content.
- H. Eyebrows (small uppercase labels above titles): UDL has none. Keep or drop?
- Also: UDL has no CTA button in its header and a "DE | FR" dropdown; TDL has "Let's talk" + inline EN DE FR IT.

---

## 5. Current task: section-by-section review with Matteo (started 2026-11-02)
Order: 1 Header · 2 Hero · 3 Platform · 4 Solutions · 5 CTA band · 6 Footer, then the deferred items below.

**RESUME POINT (updated 2026-11-03):** Reviews #1 (§5) and #2 (§6) complete, IMPLEMENTED and committed; push by Matteo pending (§6.12 follow-up). Open for Matteo: privacy text, logo (header + footer, §3.8 F), hero angles trial (§5.x), DE/FR/IT translations.
Workflow per section: Matteo states changes → clarifying questions → plan here → approval → implement → log in §1.

### 5.1 Header: AGREED, NOT IMPLEMENTED (Matteo: record only, do not act yet; move on to the next section)
Matteo's decisions: logo stays as is. Hide the language switcher (no DE/FR/IT copy yet). Add a "who are we" nav link.
1. **Hide the language switcher, keep the multilingual structure.** New setting in `_config.yml`: `show_language_switch: false`. `header.html` includes `lang-switch.html` only when it is `true`. The de/fr/it pages, text files and `languages:` list stay unchanged (they are still built at /de/ /fr/ /it/ but are not linked). To re-enable: set the flag to `true`.
2. **"Who we are" nav link: deferred** to the end of the review, together with the section itself, so the header never links to a section that does not exist yet. It will work like Platform and Solutions (anchor link to an on-page section).
   - Proposed label: **"Who we are"** (Matteo: "your preference, plain, non-corporate").
   - Proposed position: nav order How we work · Solutions · Who we are (Platform link renamed, see §5.3); the section goes **at the end of the page** (after Solutions, before the CTA band? to confirm when we build it).
   - Text key `nav.about` in all four language files.
- No other header changes (the "Let's talk" button stays).

### 5.2 Hero: AGREED, NOT IMPLEMENTED (same as Header: record now, implement later)
Matteo's decisions (2026-11-02): use the **data management angle** for now (see 5.x "Hero angles").
- **Eyebrow: dropped** (`hero.eyebrow: ""`).
- **Title (option A, chosen):** "Trust your interventions. Give your project the data infrastructure to prove it."
- **Subtitle:** option C, in "we" form: "We build the data pipelines, tools and dashboards that show, with evidence, how your project makes the world a better place."
- **Offer line: dropped** (`hero.offer: ""`; the template already hides empty text).
- **Primary button:** "Book a 30-minute call" → https://calendar.app.google/bSMCYqQJFt6VAV4Y6. Uses the booking link (later also the CTA band button, §5.5); header and How-we-work buttons stay `mailto:`. Booking URL goes in `_data/platform.yml` (new key `booking_url`), not in the text file; `hero.html` uses it for the primary button. Opens in a new tab (`target="_blank" rel="noopener"`): proposed, Matteo did not object.
- **Secondary button:** label → "See how we work", target → `#how-we-work` (decided in §5.3).

### 5.3 Platform → "How we work": AGREED, NOT IMPLEMENTED (record now, implement later)
Matteo (2026-11-02): the Platform section becomes the **"How we work"** section. Keep its current text, complemented with wireframes PDF p.3, especially the bottom part.
Wireframe p.3 content (verbatim):
- Top: "Understand first. Build second." + 4 icon items: "Made for you and your workflow" / "We learn your project before we build." · "Any methodology" / "Verra, Gold Standard, CRCF, custom." · "Integrated" / "Satellite, public and field data, together." · "Yours" / "Open source. Always exportable."
- Bottom: "How we work" + 3 numbered steps: 01 "Workshop" / "Define requirements together." · 02 "Setup" / "See your data overview immediately." · 03 "Development prioritized with you" (no description).
Decisions:
- **"How we work" is only the header nav label.** Section title stays "Built with you. Built for your project." No eyebrow.
- **Anchor** `#platform` → `#how-we-work`; nav `nav.platform` "Platform" → key `nav.how_we_work` "How we work".
- **Hero secondary button** → "See how we work" (jumps to `#how-we-work`).
- **Layout:** current 2 columns on top (title left; ¶1–¶3 right, all three kept unchanged) → row of 3 numbered steps (wireframe text verbatim) → button below.
- **Step 03 text (option B, chosen):** "Your priorities set the order. We build, review and refine together."
- **"Understand first. Build second." block: left out for now** (recommendation accepted). Reconsider during the Solutions review: "Any methodology" (Verra, Gold Standard, CRCF, custom) and "Integrated" (satellite, public and field data) could complement the Solutions cards; "Made for you…" and "Yours" overlap with ¶1 and ¶3.
- Implementation: merge into one section include (reuse the step styling of the parked `how-we-work.html`); text keys `platform.steps` (title + text each) in en.yml, empty in de/fr/it.

#### 5.3b Platform block inside "How we work": AGREED (one-liner wording pending a quick OK), NOT IMPLEMENTED
Matteo: add the platform to section 3 (fits "How we work" better than Solutions). **Core message:** one customisable data viewer at the centre (to view and control your data) + plug-in modules around it, depending on your needs. Sources: `docs/TerraDataLab Deck.html`, wireframes PDF p.4.
Material found (verbatim):
- Wireframe p.4 ("Platform, part 1: modules"): title "Every module adds evidence your verifier can trust." · intro "Start with the core. Add what your project needs, when it needs it." · 5 modules with one-liners: Core Data Viewer "One source of truth for the whole team." · Satellite Hook "Continuous evidence between field visits." · Public Databases "Fewer samples, stronger baseline." · Real World Hook "Field work traceable as it happens." · Metric Calculator "Every number linked to its source." Layout = UDL icon list + toggles (left) and a large screenshot (right). Same 5 modules + texts are in the One-Page draft and in the parked `modules.html` / `platform.js` / `platform.yml modules`.
- Deck (module data-flow map + mockups): Core module "One workspace per project": CSV upload · spatial database · sub-areas and time · flexible dashboard · views and comparison; "Sub-areas and time are the spine of the product: every hook writes into them, and the dashboard is configurable per project." Satellite hook (Sentinel, Landsat; "Rasters, resolutions, and the archive"). Public DBs (DEM, ESDAC, swisstopo; "Same variable, six sources, one consensus"). Real world hook (farmer reports, lab, sensors; "Unstructured evidence, treated as data"). Human validation ("Nothing counts until a person confirms it"). Metric calculator (by methodology; not designed yet). Modelling module (predictions only; not designed yet; "Predictions kept strictly separate from measurements").
Open questions: asked in chat 2026-11-03 (placement in the section, which modules, visual form, title/intro text, screenshot, overlap with Solutions).
Matteo's answers (2026-11-03):
1. **Order agreed:** title + ¶1–¶3 → platform block (viewer at centre + modules) → steps 01–03 → button.
2. **Rename: "Real World Hook" → "Operations Hook"** (applies site-wide).
3. "Other modules should be shown", with this text (verbatim, pasted by Matteo):
   - **Dynamic Monitoring Tool**: "Dynamic monitoring platform that tracks intervention performance through continuous satellite observation." Bullets: "Automatic alerts identify where conditions deviate from baseline" · "Reduces monitoring costs by prioritizing field verification" · "Data structured for dynamic performance monitoring methodologies" · then "Learn more".
   - **Weather Scenario Builder**: "Create realistic weather scenarios from your location's climate history for any environmental model."
   To clarify: which "other modules" (Human validation, Modelling, and/or these two tools as modules); whether Solutions cards move into the platform; hub vs list visual; "Learn more" target; still open: Q4 text, Q5 screenshot.
Matteo's answers, round 2 (2026-11-03):
- A. "Other modules" = **Dynamic Monitoring Tool + Weather Scenario Builder** (not Human validation / Modelling).
- B. **The three Solutions cards are dropped** from Solutions. Matteo will **rework the Solutions section** himself (later).
- C. Module set confirmed: Satellite Hook · Public Databases · Operations Hook · Metric Calculator · Dynamic Monitoring Tool · Weather Scenario Builder (6 around the Core Data Viewer).
- D. **No "Learn more"** links.
- E. **Hub layout agreed. A real screenshot of the data viewer goes in the centre**: plan a place for it (placeholder frame until it exists).
- F1. Title/intro: propose options based on "Start with the core. Add what your project needs, when it needs it."
- F2. Module texts: mix wireframe one-liners + Matteo's/deck text, **one line each**.
- F3. **Screenshot: wait for the real one** (do not use the deck mockup).
Proposals sent in chat 2026-11-03: hub layout (3 modules left · screenshot centre · 3 right; phone: screenshot then list), title/intro options, one-liners per module. Still to confirm: "coming soon" marking (which modules), Field Traceability = Operations Hook?, Solutions section + nav link while it is being reworked.
Matteo's answers, round 3 (2026-11-03): layout OK; title/intro **option C**; **no "coming soon"** labels; **Field Traceability = Operations Hook** (dropped as a separate tool); Solutions to be reworked now (§5.4).
**Final content of the platform block:**
- Title: "Start with the core. Grow from there."
- Intro: "A customisable data viewer brings all your project data into one place. Plug in the modules your project needs, when it needs them."
- Centre: screenshot placeholder (real screenshot later) + caption **Core Data Viewer**: "One place to view and control your project data, for the whole team."
- Left: **Satellite Hook**: "Enrich your data with satellite images and time series." (Matteo: "something like…", polished) · **Public Databases**: "Fewer samples, stronger baseline." · **Metric Calculator**: "Compliant metrics to measure your progress." (Matteo)
- Right: **Operations Hook**: "Keep track of measurements and interventions in your fields." (Matteo, "with" → "in") · **Dynamic Monitoring Tool**: "Satellite alerts when conditions deviate from baseline." (shortened) · **Weather Scenario Builder**: "Weather scenarios from your local climate history." (shortened)
- Implementation: module ids/order + `screenshot` file in `_data/platform.yml`; texts in en.yml under `platform.modules`; reuse/replace the parked modules template; no toggles, no JS.

### 5.4 Solutions: AGREED (for now), NOT IMPLEMENTED
The three cards (Field Traceability, Dynamic Monitoring, Weather Scenarios) are dropped: Dynamic Monitoring + Weather Scenarios became modules, Field Traceability = Operations Hook (§5.3b). Matteo wants to rework the section now.
Possible source: One-Page draft's parked "Combinations" block: "One platform. Five combinations." / "From baseline through audit." · See your field (Core) "All your project data in one view, shared by the whole team." · Get baseline (Core+Satellite+Public DBs) "Satellite and soil data show where to sample, so fewer field measurements hold up in audit." · Land evolution (Core+Satellite+Metrics) "Track change over time with satellite evidence and metrics tied to their sources." · Operations (Core+Satellite+Real World) "Field work and satellite monitoring in one place, traceable as it happens." · Audit preparation (Core+Metrics+Real World) "Every number linked to its source and every observation to its place, ready for the verifier." (code parked in `combinations.html`).

**Decision (Matteo, 2026-11-03): "Keep only the table above for now."** Solutions = the Combinations table, text verbatim from the One-Page draft (title "One platform. Five combinations.", intro "From baseline through audit.", 5 rows), no eyebrow. Applied defaults (to flag if wrong): "Real World" → "Operations Hook" in the table; columns = the 5 modules used by the combinations (Core, Satellite, Public DBs, Metrics, Operations); Dynamic Monitoring + Weather Scenario Builder not in the table; no images/accordion pictures for now; nav link "Solutions" kept. Reuse parked `combinations.html` (+ `platform.yml combinations`). Full Solutions rework by Matteo later.

### 5.5 CTA band: AGREED, NOT IMPLEMENTED (2026-11-03)
- **Button label: "Get in touch"** (as in wireframe p.3).
- **Button link: booking page** https://calendar.app.google/bSMCYqQJFt6VAV4Y6, same format as the Hero button (new tab, `booking_url` from platform.yml). → The booking link is now used by **Hero primary + CTA band**; header "Let's talk" and the How-we-work button stay mailto.
- Title: "Ready to talk about your project?" kept unless Matteo picks the wireframe's "Let's talk about your project." (asked).
- Position unchanged: Solutions → CTA band → Who we are → footer.

### 5.6 Footer: AGREED, NOT IMPLEMENTED (2026-11-03)
- **Columns like urbandatalab.ch:** (1) logo + "© 2026 TerraDataLab" · (2) page links: How we work · Solutions · Who we are · (3) Legal: Privacy · (4) Contact: m.jriva@urbandatalab.net + LinkedIn (personal for now: http://www.linkedin.com/in/matteojriva → `linkedin_url` in platform.yml). Column labels: **Pages · Legal · Contact** (green, like UDL's orange titles; not objected).
- **No Terms page. Imprint link dropped for now** (imprint pages stay in the repo, unlinked). No phone, no address.
- **Draft UrbanDataLab banner in the footer** (sister-company line + link to https://urbandatalab.ch); Matteo will add another banner later elsewhere. Wording (option b): **"Part of the UrbanDataLab family. → Visit urbandatalab.ch"**: thin strip at the top of the footer, text only until a UDL logo file is provided.

### 5.7 "Who we are": AGREED, NOT IMPLEMENTED (assets pending)
Nav label "Who we are" (§5.1). Questions asked in chat: position vs CTA band, content blocks, text source, people/photos, LinkedIn, UDL link.
Matteo's answers (2026-11-03):
- **Position: after the CTA band** (just above the footer). Nav: How we work · Solutions · Who we are.
- **Content: (a) short text about TerraDataLab + (b) person card(s).** No UDL link here (banner is a separate later item).
- **Text sources:** `docs/UDL BiFold Brochure.pdf` (person block: "MATTEO JUCKER RIVA / Data Scientist & Remote Sensing Specialist / Geography PhD. 10+ years of field sampling and satellite data across soil carbon, land management, and ecosystem monitoring. / There is no silver bullet for carbon measurement. I build what your project needs — shaped around your methodology, your landscape, and your team."), https://ciskoh.github.io/about (data scientist + geography PhD, 10+ yrs; ML/DL, computer vision on geospatial data, environmental databases for monitoring/carbon accounting; fieldwork: sensors, sampling, regenerative/precision agriculture, dry forest/rangeland, remote sensing + GIS for soil health and carbon; capacity building: workshops, training, goal "accessible and actionable" data; links GitHub ciskoh, LinkedIn matteojriva), `docs/20260108_values.md` (beliefs: crossroad / climate change unavoidable but change still possible; science + open heart + complex thinking; communities and networks, "network agent"; many solutions adapted to place, time, community; actions: combine prevention and adaptation, measure impacts clearly, localise vulnerabilities, connect people and communities, move knowledge, prefer custom solutions, understand first sell later, chase synergies not compromise). "Hierarchy of problems" = internal, not for the site.
- **Photo:** the portrait in the brochure (page 1, embedded image 0, 1680×1171 CMYK). Matteo can provide the original file; asked for it (better quality than extracting CMYK from the PDF).
Draft proposals sent in chat 2026-11-03 (title options, intro, values items, person card).
Matteo's answers, round 2 (2026-11-03):
- **Title (final): "Understand first. Build second."** (alternatives A1–A5 proposed, Matteo kept B).
- **Intro ("roughly ok"):** "Climate change is already here: our land, our roads and our food systems need active care to keep sustaining us. We believe there is no single solution, but many, each adapted to a place, a time and a community. So we connect the people a project needs (land managers, carbon developers and data specialists) and build the tools each project actually needs."
- **Values row (final):** "Measure what matters." · "Prefer custom solutions." · "Chase synergies, not compromise."
- **Person card:** Matteo Jucker Riva · Data Scientist & Remote Sensing Specialist · bio "Geography PhD. 10+ years of field sampling and satellite data across soil carbon, land management, and ecosystem monitoring." (silver-bullet sentence removed) · link LinkedIn http://www.linkedin.com/in/matteojriva (only link). **Space for a second person card** (people = list in en.yml + photos in platform.yml; an empty card is not shown).
- **Exception to the "we" rule: person bios may use "I"** (only there).
- **Assets (photos, screenshot): Matteo uploads them all together later.**

### 5.8 Implementation (approved by Matteo 2026-11-03: "yes go ahead")
Per CLAUDE.md: copywriter agent (text files `_data/i18n/*.yml` + `_data/platform.yml` + `_config.yml` flag) then web-designer agent (templates + CSS), then style-revisor agent vs urbandatalab.ch. Key layout: en.yml sections `nav` (how_we_work, solutions, about, cta) · `hero` · `how_we_work` (title, body, `platform` {title, intro, core, modules}, `steps`, cta) · `solutions` (title, intro, `columns`, `items`) · `cta` · `about` (title, intro, values, `people`) · `footer` (banner, banner_link, column labels, copyright). platform.yml: contact_email, booking_url, linkedin_url, sister_url, viewer_screenshot, modules, solution_columns, combinations, people (id, photo, linkedin_url). Old parked keys removed from the text files; parked template files left in place (cleanup candidates, Matteo decides).
**Outcome (2026-11-03): IMPLEMENTED.** Build OK (no Liquid errors), /de/ /fr/ /it/ still build (empty). Checked in `_site`: 3 mailto → m.jriva@urbandatalab.net (header, How-we-work button, footer); booking URL only on Hero primary + CTA band (new tab); anchors #how-we-work #solutions #who-we-are.
- Copywriter: `_config.yml` flag, `platform.yml`, `i18n/*.yml` (90 identical keys; old parked keys removed).
- Web designer: onepage order, header, hero, how-we-work (hub + steps), solutions (static table), cta, new about.html, footer (UDL strip + 4 columns), tokens/main.css. Own choices: module icons by id (Satellite circle, Public DBs square, Metrics diamond, Operations leaf, Dynamic Monitoring triangle, Weather hexagon); dark screenshot placeholder; hub → 2 cols at 641–960px, 1 list ≤640px; steps numbers 56px light green; table sticky first column + inner scroll on phones; values marked with the brand parallelogram; person photo 168px square; footer titles light green #6fae84 (7.3:1 on navy); phone header = brand + "Let's talk" / nav row.
- Style-revisor (vs urbandatalab.ch) simple fixes APPLIED: `--fs-item` 15→16px; `--fs-row-name` 18→20px; footer base 14→16px, links 18px (`--fs-footer-link`), titles 18px (`--fs-footer-title`); phone: hub title/intro left-aligned. Compatible: type scale, buttons, radii, bands, footer structure (§3.8 item C now done), line icons (narrows item E).
- **LARGE items for Matteo (not implemented):** S1 Solutions table on phones shows ~1.5 of 5 columns (sideways scroll; UDL has no wide tables) → recommend phone layout as one card per combination listing its modules. S2 Item descriptions grey #5a6070 vs UDL dark text → recommend keep (1 token if wanted). S3 Footer logo wordmark vs UDL's uppercase logo → settle with §3.8 F (real logo). S4 Phone header 2 rows vs UDL burger → keep while 3 links (§3.8 D). S5 Placeholders (screenshot, photo) look unfinished → filled by Matteo's assets.
- **Unused files (cleanup candidates, NOT deleted, Matteo decides):** `_includes/sections/platform.html`, `approach.html`, `modules.html`, `combinations.html`, `assets/js/platform.js`, parked CSS block at the end of main.css, token `--fs-num`.
- Pre-change copies: session scratchpad (`pre-designer/`, `style-review/backup/`).

### 5.x Deferred to the end of the review
- **Hero angles trial (agreed in principle 2026-11-02):** three angles (1 data engineering, 2 scientific support, 3 auditable data / trust). Plan: one landing page per angle (e.g. `/data/`, `/science/`, `/trust/`), same page with a different Hero; hero text variants in en.yml under `hero` with identical fields; each page names its variant in front matter; variants get a canonical tag pointing to `/`. Traffic is targeted by audience (LinkedIn, e-mails, contacts), not randomly split (too little traffic; no server on GitHub Pages). Measurement: angle tag in the e-mail subject of each CTA (a Google booking link cannot carry a tag, so booked calls are only attributable via analytics or by asking), optional cookieless analytics (GoatCounter / Plausible), external service, needs Matteo's OK + privacy-policy mention. Needs Matteo's text for angles 2 and 3. For now only angle 1 (data management) is live.
- **"Who we are" section** (+ its nav link): content not defined yet; Matteo will decide later.
- **Banner linking to UrbanDataLab** (urbandatalab.ch): specified by Matteo in review #2 → §6.4 (under the header).

## 6. Current task: review #2, section by section (started 2026-11-03)
Matteo: "start review #2 … let's go section by section. This time, for every section mention the assets (images) that are needed."
Workflow per section (as §5): show current content + assets → Matteo states changes → clarifying questions → plan here → approval → implement → log in §1. Rules still valid: always "we" (bios may use "I"), no eyebrows, mailto = m.jriva@urbandatalab.net, booking link on Hero primary + CTA band. Open items from review #1 to raise in the matching section: S1–S5 (§5.8), unused files cleanup, §5.x deferred items (hero angles, second UDL banner).
Order: 0 Site-wide (tab title, search snippet, favicon, share image) · 1 Header · 2 Hero · 3 How we work (text · platform hub · steps) · 4 Solutions · 5 CTA band · 6 Who we are · 7 Footer · 8 Legal pages + 404.

### 6.1 Asset inventory (what each section needs; status 2026-11-03)
All images go in `assets/images/`; file names are set in `_data/platform.yml`, never in the text files. Nothing is in `assets/images/` yet.
| Section | Asset | Now on the site | Needed? | Suggested format |
|---|---|---|---|---|
| 0 Site-wide | Favicon (browser tab icon) | none | yes | SVG, or PNG 512×512 |
| 0 Site-wide | Share image (preview on LinkedIn, e-mail, chats) | none | recommended | PNG/JPG 1200×630 |
| 1 Header | Logo | CSS green parallelogram + "TerraDataLab" in text | yes, if a real logo exists | SVG (colour version) |
| 2 Hero | Hero image/illustration | none (text only) | to decide | JPG/WebP ≥2000px wide |
| 3 How we work | Core Data Viewer screenshot | dark placeholder frame | yes (Matteo, §5.3b E/F3) | PNG/WebP ≥1600px wide |
| 3 How we work | 6 module icons | CSS shapes (circle, square, diamond, leaf, triangle, hexagon) | optional | SVG line icons, one colour |
| 3 How we work | Step icons | none (numbers 01–03) | no | – |
| 4 Solutions | Pictures per combination | none (dropped for now, §5.4) | after the rework | – |
| 5 CTA band | – | none | no | – |
| 6 Who we are | Portrait Matteo | placeholder square | yes (original of the brochure photo, §5.7) | JPG, square, ≥600×600 |
| 6 Who we are | Portrait person 2 | card hidden | only if a 2nd person is added | JPG, square, ≥600×600 |
| 7 Footer | Logo, light version for the navy footer | CSS mark + wordmark | yes, if a real logo exists | SVG (white/inverse) |
| 7 Footer | UrbanDataLab logo for the strip | text only | optional | SVG |

### 6.3 Section 0, Site-wide: AGREED, IMPLEMENTED 2026-11-03 (§6.12)
Matteo's decisions:
1. **Tab title:** "TerraDataLab - data solutions for sustainability" (verbatim) → `en.yml meta.title`. Sub-pages show "Privacy | TerraDataLab - data solutions for sustainability" (existing head.html logic).
2. **Search snippet:** the hero subtitle, verbatim → `en.yml meta.description` (also used as the share-preview text, og:description).
3. **Favicon:** from `assets/images/image001.png` (Matteo-provided: 764×706 RGBA PNG, 2.1 MB, transparent background; tree half photo / half low-poly mesh).
4. **Share image:** also from `image001.png`.
Plan:
- `image001.png` stays the untouched master. Derived files are generated from it (too heavy to serve directly: 2.1 MB, not square, not 1200×630): `favicon-32.png` (32×32, transparent), `favicon-192.png` (192×192, transparent, Android), `apple-touch-icon.png` (180×180 on white; iOS shows transparency as black), `share.jpg` (1200×630, tree centred on white, ~150 KB). Previews checked in the scratchpad: the tree reads at 32/48 px, and at 16 px only as a green blob (acceptable).
- File names go in `_data/platform.yml` (`favicon`, `favicon_large`, `apple_touch_icon`, `share_image`); `head.html` adds the icon links + `og:image` (absolute URL, 1200×630) + `twitter:card summary_large_image`.
- The share image has no text on it (no generated wording).
- `og:image` must be an absolute URL: `_config.yml url` is empty, but the GitHub Pages build (actions/jekyll-build-pages) fills it in (https://ciskoh.github.io); locally the URL stays relative. No config change needed until the custom domain.
- **Share-image background: white** (Matteo: "ok"; matches the page and hides a few light specks left from the cut-out at the top left).
- Note for section 2: image001.png is also a hero-image candidate (raise in the Hero review).

### 6.4 Section 1, Header: AGREED, IMPLEMENTED 2026-11-03 (§6.12)
Matteo's decisions:
1. **Logo: unchanged for now** (CSS parallelogram + "TerraDataLab"); real logo later (§3.8 F stays open). image001.png is NOT used as header logo (too detailed at 16–40 px).
2. **Nav links + "Let's talk" button: unchanged.**
3. **Phone header: two rows kept** (no burger menu; closes S4 / §3.8 D).
4. **NEW: UrbanDataLab banner directly under the header** (= the "second banner" of §5.x). Matteo's source text: "looking for other use cases? Visit Urban DataLab. Your Data Expert for Smarter Location Decisions" (rewording allowed).
   - **Wording (option C):** "Looking for other use cases?" + link "Visit UrbanDataLab →". Same text on desktop and phone.
   - **Spelling: "UrbanDataLab"** everywhere (not "Urban DataLab").
   - **Background: UDL blue #1c3f4a** (UDL's dominant dark colour, checked on urbandatalab.ch 2026-11-03), white text. New token `--color-udl`.
   - **Home page only** (not on Privacy / Imprint / 404).
   - ~~Footer strip kept~~ → dropped, see §6.10.
Implementation plan: new include `_includes/udl-banner.html`, included right after the header only when `page.ref == "home"`; thin full-width strip (~40 px), centred text, link to `sister_url` (platform.yml) in a new tab; scrolls away (header stays sticky); not dismissible. Text in en.yml under new key `udl_banner` (`text`, `link`), empty in de/fr/it; empty = banner hidden.
Images: none. Optional later: white UDL logo (SVG) at the left of the banner.

### 6.5 Section 2, Hero: AGREED, IMPLEMENTED 2026-11-03 (§6.12)
Matteo's decisions:
1. **Hero image: option B**: `image001.png` on the right, replacing the grey slanted shape (`hero__shape`). Web copy generated from the master (≈200–300 KB, e.g. `hero-tree.webp` or `.png` with transparency, ~1000 px wide); file name in platform.yml (`hero_image`); alt text in en.yml `hero.image_alt` (empty for now = decorative). Phone: image below the buttons, smaller.
2. **Subtitle and both buttons: unchanged.**
3. **Title: too wordy.** Matteo's base: "Trust what you do. Give your project the tools that prove it". 5 options requested (sent in chat):
   1. "Trust what you do. Give your project the tools that prove it." (Matteo's base, verbatim + full stop)
   2. "Trust what you do. Get the tools that prove it."
   3. "Trust what you do. Prove it with the right tools."
   4. "Trust your work. Give your project the tools to prove it."
   5. "Trust what you do. We build the tools that prove it."
   **→ Chosen: option 4, "Trust your work. Give your project the tools to prove it."** → `en.yml hero.title`.
4. **Hero angles trial (§5.x): stays in memory, not now.**
Images: image001.png (provided) → hero web copy.

### 6.6 Section 3, How we work: AGREED, IMPLEMENTED 2026-11-03 (§6.12)
Matteo's decisions:
1. **Text unchanged, order changed:** platform block first (with the video in place of the screenshot) → steps 01–03 → text (title "Built with you. Built for your project." + 3 paragraphs). To confirm: where the e-mail button goes (end of section?), and that the section now opens with the platform title "Start with the core. Grow from there." (anchor #how-we-work and nav label unchanged).
2. **Dynamic Monitoring Tool one-liner** → based on "Compare your project area with reference sites dynamically" (reword allowed). Options sent: (a) "Compare your project area with reference sites, dynamically." (b) "Compare your project area with reference sites over time." (c) "Track your project area against reference sites as conditions change." Recommended (b) ("dynamic" is already in the module name).
3. **Core Data Viewer: video instead of screenshot**: `assets/images/coreDataViewer.webm` (Matteo-provided): 1589×744 (≈2.14:1, wide), 32 s, 3.4 MB, VP8 video, no audio track. Works in browsers as `<video autoplay muted loop playsinline>` (no controls; file name in platform.yml, replacing `viewer_screenshot`). Notes: (i) the hub's centre column is ~470 px wide → the wide video would be ~220 px tall, details unreadable → layout question (full-width video above the modules vs keep the hub); (ii) older iPhones/iPads may not play WebM → an MP4 copy is advisable (cannot convert here: no ffmpeg in the project env, and installing it would touch files outside the project folder); (iii) a poster image (still frame) is needed for browsers that don't play it and for visitors with "reduce motion" (video then does not autoplay); (iv) 3.4 MB: load lazily (`preload="metadata"`).
4. **Module icons: unchanged** (outline shapes).
5. **Steps + button text: unchanged.**
Matteo's answers, round 2 (2026-11-03):
- **Layout A: keep the hub** (video in the centre column, 3 modules each side).
- **New video: `assets/images/Screencast002.webm`**: 1331×743 (≈16:9), 35.8 s, 6.0 MB, VP8, no audio. Frame aspect changes 16:10 → the video's ratio (~470×262 px on desktop).
- **Poster: `assets/images/screencastPoster.png`**: 1331×743, 628 KB (dashboard "Carbon NBS Methodology Demonstrator"). Plan: serve a lighter copy (JPG/WebP ~100–150 KB), master untouched.
- **No MP4**: browsers that cannot play WebM (older iPhones/iPads) show the poster. Accepted.
- Plan: `<video autoplay muted loop playsinline preload="none" poster=…>`; 6 MB is heavy → a few lines of JS start the video only when it scrolls into view; with "reduce motion" it stays on the poster. File names in platform.yml (`viewer_video`, `viewer_poster`, replacing `viewer_screenshot`).
- `coreDataViewer.webm` (first video) is no longer used → cleanup candidate (not deleted; Matteo decides).
- Asked: is the data in the video/poster (project "AgriCarbon NBS Switzerland", field ids) OK to show publicly?
Still open from round 1: button position (end of section?) + section opening with the platform title; Dynamic Monitoring one-liner (a/b/c).
Matteo's answers, round 3 (2026-11-03):
- **Video/poster data OK to show publicly** (Matteo: "Yes ok").
- **Button: stays right after the steps** ("as it is").
- **"Built with you. Built for your project." stays the main section title** (top of the section); "Start with the core. Grow from there." stays the platform-block title below it.
- **Dynamic Monitoring Tool one-liner: option (a) "Compare your project area with reference sites, dynamically."** → en.yml `how_we_work.platform.modules.dynamic_monitoring.text`.
**Final order (Matteo chose option A, 2026-11-03):** main title "Built with you…" → platform block (title + intro + hub with video) → steps 01–03 → e-mail button → the 3 paragraphs (full width, at the end).
Images/video: Screencast002.webm + screencastPoster.png (provided).

### 6.7 Section 4, Solutions: AGREED, IMPLEMENTED 2026-11-03 (§6.12)
Matteo's decisions:
1. **Content unchanged** (title, intro, 5 rows; full rework later).
2. **Column headers use the same module names as the hub:** Core Data Viewer · Satellite Hook · Public Databases · Metric Calculator · Operations Hook (en.yml `solutions.columns`: satellite, public_db, metrics change).
3. **No icons in the column headers** ("keep it clean").
4. Phone layout (S1): Matteo asked for a draft of the card option → two mock-ups at 390 px shown in chat (session scratchpad `cards/`): **A** = one card per combination, its modules as small green pills (no extra text); **B** = same, modules as a "Modules: … · …" line (needs a new label word). **→ Matteo chose A (cards with green pills) for phones (≤640 px); desktop/tablet keep the table.** Closes S1. Pills are built from the same platform.yml `includes` + en.yml column names (no new text).
Images: none.

### 6.8 Section 5, CTA band: AGREED, NO CHANGES (2026-11-03)
Matteo: "keep it all as is". Title "Ready to talk about your project?" (final; wireframe alternative dropped) · button "Get in touch" → booking link · solid green band, no background image · position after Solutions.
Images: none.

### 6.9 Section 6, Who we are: AGREED, IMPLEMENTED 2026-11-03 (§6.12)
Matteo's decisions:
1. **New heading "Our values" above the values row** (verbatim) → new key `about.values_title` (all 4 language files; empty = hidden). Smaller heading (h3) than the section title.
2. **Person 1 photo: `assets/images/matteo001.png`** ("to be reframed"). File: 1024×768 RGBA canvas, the photo is a ready-cut black-and-white circle of only ~208×206 px in the top-left corner (rest transparent).
3. **Person 2 = Patrick Schirmer.** Matteo's text (verbatim): "Dr. Sc. ETH Patrick Schirmer is the founder and platform manager of UDL. He is an architect and urban data scientist with a PhD in agent-based urban simulation (ETH Zurich, 2015). Before founding UDL, he gained several years of experience  as planner on large development projects in Europe and Russia (KCAP) and he developed datahubs and models  for the Swiss real estate market with FPRE (2015-2018)."
4. **Person 2 photo: `assets/images/patrick001.png`**: 1280×960 canvas, b/w circle of only ~141×135 px top-left (rest transparent).
Plan / proposals (asked in chat):
- Reframe: crop each circle out of its canvas into its own small file (e.g. `matteo.png`, `patrick.png`), masters untouched; names in platform.yml `people[].photo`.
- Photos are already round + b/w → show both **round** (currently square placeholder 168 px).
- Size: Patrick's photo (141 px) is smaller than the 168 px display → blurry, esp. on high-res screens; Matteo's (208 px) is OK at normal resolution, soft on high-res. Options: larger originals, or display at ~140 px.
- Card fields for Patrick: name / role / bio / LinkedIn; text options sent (full vs shortened bio, "UDL" → "UrbanDataLab", role line), LinkedIn URL asked.
- urbandatalab.ch/about has no team portraits (checked 2026-11-03), so no style reference there; UDL uses 18 px image radius.
Matteo's answers, round 2 (2026-11-03):
- **Photos: "keep them as is"**: use the provided files, no larger originals; display size stays 168 px. The circles are cropped out of the canvases (masters untouched), so the photos show round (transparent corners; the square placeholder background is not shown behind a photo). Accepted: Patrick's photo is upscaled (141 → 168 px) and looks soft.
- **Patrick, role: "Product & Platform Manager"** (Matteo wrote "Product& platform Manager"; spacing/capitals normalised to match Matteo's role line).
- **Patrick, bio: option B**: "Architect and urban data scientist. PhD in agent-based urban simulation (ETH Zurich, 2015). Planner on large development projects in Europe and Russia (KCAP); data hubs and models for the Swiss real estate market (FPRE, 2015–2018)."
- **Patrick, name: "Patrick Schirmer"** (proposed, not objected; no titles in names).
- **Patrick, LinkedIn: https://www.linkedin.com/in/patrick-m-schirmer/** → platform.yml `people[person_2].linkedin_url`; link text "LinkedIn".
- Implementation: en.yml `about.people.person_2` filled (id could be renamed `patrick`), `about.values_title: "Our values"`; platform.yml photos `matteo.png` / `patrick.png` (crops).
Images: matteo001.png + patrick001.png (provided, low resolution, used as is).

### 6.10 Section 7, Footer: AGREED, IMPLEMENTED 2026-11-03 (§6.12)
Matteo: "Repeat the banner for UDL before the Footer. Rest stays as it is."
- **UDL banner repeated just above the footer** (after Who we are): same include, text ("Looking for other use cases?" + "Visit UrbanDataLab →"), UDL blue #1c3f4a and link as the banner under the header (§6.4); home page only (like §6.4, to confirm).
- Footer otherwise unchanged: 4 columns (logo + ©, Pages, Legal: Privacy, Contact: e-mail + Matteo's LinkedIn) · Imprint hidden · no UDL logo (text only).
- **Footer strip "Part of the UrbanDataLab family. → Visit urbandatalab.ch" is DROPPED** (Matteo 2026-11-03; supersedes §6.4 "footer strip is kept"): the blue banner above the footer replaces it. Keys `footer.banner` / `banner_link` removed from all 4 text files, strip markup/CSS removed.
Images: none (logos later, §3.8 F / S3).

### 6.11 Section 8, Legal pages + 404: AGREED, IMPLEMENTED 2026-11-03 (§6.12)
**Imprint (Matteo: "Create an imprint similar to https://urbandatalab.ch/imprint but only use my data, no company").** UDL's imprint (checked 2026-11-03) = title "Imprint" → heading "Official address" + company, street, postcode/town, country, e-mail → "Commercial Register Entry" (company name, UID, registry office) → "VAT Number". TDL version keeps only the address block (no company → no register entry, no VAT):
```
Imprint
Official address
Matteo Jucker Riva
Delsbergerallee 11
4053 Basel
Switzerland
m.jriva@urbandatalab.net
```
(Matteo wrote "delsbergerallee": capitalised. E-mail = the site contact address, taken from platform.yml `contact_email`.)
Plan: `imprint.md` front matter `title: "Imprint"`, body = heading + address as lines, e-mail as mailto link via Liquid (`site.data.platform.contact_email`). Footer link un-hidden: en.yml `footer.imprint: "Imprint"` (Legal column: Privacy · Imprint). DE/FR/IT imprint pages stay empty (not linked while the switcher is hidden). Matteo's answers (2026-11-03):
- **Imprint: footer link shown, e-mail line kept** (as drafted above).
- **Privacy: link hidden** until Matteo provides the text (en.yml `footer.privacy: ""`; page stays in the repo, unlinked). Legal column then shows only "Imprint".
- **404: Matteo: "you do it".** Proposed (en.yml `not_found`): title "Page not found." · text "The page you are looking for does not exist or has moved." · back "Back to the home page". Shown in chat; implemented unless Matteo objects.
Images: none.

### 6.12 Implementation plan for review #2: IMPLEMENTED 2026-11-03 (Matteo: "yes go on")
Review #2 complete (all sections agreed 2026-11-03). Same procedure as §5.8 (CLAUDE.md): **copywriter agent** (text: `_data/i18n/*.yml` same keys in all 4 files, de/fr/it empty; `_data/platform.yml`; `imprint.md`) → **web-designer agent** (templates, CSS, image derivatives, small JS) → **style-revisor agent** vs urbandatalab.ch (simple fixes applied, large ones logged for Matteo) → build check → screenshots in `screenshots/` → log in §1.
Work list:
- §6.3 Site-wide: meta.title, meta.description; favicon-32/-192, apple-touch-icon, share.jpg from image001.png; head.html icon + og:image + twitter tags.
- §6.4 Header: UDL banner include (home only, under the header, #1c3f4a, "Looking for other use cases?" + "Visit UrbanDataLab →").
- §6.5 Hero: title option 4; hero image (web copy of image001.png) replacing the grey shape; phone below the buttons.
- §6.6 How we work: new order (title → platform hub with video → steps → button → paragraphs); Dynamic Monitoring one-liner (a); video Screencast002.webm + poster (light JPG copy), lazy start when in view, poster for reduce-motion.
- §6.7 Solutions: full module names in the column headers; phone cards with green pills (≤640 px).
- §6.9 Who we are: "Our values" heading; Matteo + Patrick photos (circle crops, round, 168 px); Patrick card (name, role, bio B, LinkedIn).
- §6.10 Footer: UDL banner repeated above the footer (home only); footer strip removed.
- §6.11 Legal: imprint page + footer link; privacy link hidden; 404 texts.
Not touched: unused files (cleanup candidates from §5.8 + `coreDataViewer.webm`), hero angles trial, logo.
**Outcome (2026-11-03): IMPLEMENTED.** Build OK; en/de/fr/it build; 4 text files have identical keys.
- Copywriter: en/de/fr/it.yml (new `udl_banner`, `hero.image_alt`, `about.values_title`; renamed `screenshot_alt`→`video_alt`, `person_2`→`patrick`; removed `footer.banner`/`banner_link`), platform.yml (icons, share image, hero_image, viewer_video/viewer_poster, people photos, Patrick LinkedIn), imprint.md.
- Web designer: head.html (icons, og:image, twitter card, video script on home only), new `_includes/udl-banner.html` (in default.html after the header + before the footer, home only), footer strip removed, hero (text 3 : image 2; phone image below buttons ≤320 px), how-we-work (new order, video + poster, paragraphs in 2 columns at the end, main title centred), solutions (phone cards + pills ≤640 px, table hidden there), about ("Our values" h3, round photos), new `assets/js/viewer-video.js` (plays when in view, poster with reduced motion / no JS). Generated images (masters untouched): favicon-32.png 3 KB, favicon-192.png 65 KB, apple-touch-icon.png 48 KB, share.jpg 122 KB, hero-tree.png 231 KB (763×700, native size, no upscaling), screencast-poster.jpg 101 KB, matteo.png 208×208, patrick.png 141×141.
- Style-revisor (vs urbandatalab.ch) simple fixes APPLIED: `--fs-udl` 15→16 px (UDL smallest text 16 px); hero image corner radius 18 px (UDL image radius); legal/404 page text 16→20 px (UDL imprint text 20 px). Backup of the CSS before the fixes in the session scratchpad.
- L3 fixed by Claude: Patrick's master is slightly oval (141×135) → photo looked smaller/lower; both crops regenerated as full circles (resized to square, 4% / 1% vertical stretch). The screenshots below were taken before this fix.
- **LARGE items for Matteo (NOT implemented):** **L1** short pages (imprint, 404) leave white space under the footer on tall screens → recommend footer pinned to the window bottom (body flex column, `main {flex:1}`; affects every page). **L2** imprint title: UDL 42 px bold centred vs ours 40 px regular left like all titles → recommend keep ours.
- Video: the visual check showed the video does autoplay in Firefox; screenshots taken with reduced motion (poster).
- Still untouched: hero angles trial, logo, privacy text.
**Follow-up (2026-11-03, Matteo: "Act on L1 and L2, cleanup including dropping that unused video, commit and push"):**
- L1 DONE: body = flex column (min-height 100vh/100dvh), `main { flex: 1 0 auto }` → footer at the window bottom on short pages.
- L2 DONE (light version): legal/404 page title centred (`.wrap--narrow.prose h1`), weight kept at 400 like all titles; content stays left-aligned.
- Cleanup DONE: deleted `_includes/sections/platform.html`, `approach.html`, `modules.html`, `combinations.html`, `assets/js/platform.js`, the parked CSS block + its media-query rules, token `--fs-num`, the onepage.html comment about parked files, and `assets/images/coreDataViewer.webm`. README file table updated (viewer-video.js).
- Screenshots retaken (home 1280/390, imprint 1280), incl. Patrick's re-crop. Committed to main (8644062-amended). Push FAILED from Claude's shell (no GitHub credentials, no gh CLI): Matteo pushes it; GitHub Actions then deploys to https://ciskoh.github.io/terradatalab/.
**Fix after the first deploy (2026-11-03):** Matteo saw on https://ciskoh.github.io/terradatalab/ a huge arrow icon instead of the blue UDL banner, the hero image below the text, a clipped poster and a non-working video (local version fine). Checked: GitHub Pages served the NEW HTML and CSS; cause = the browser kept the OLD main.css/tokens.css from its cache (GitHub Pages: cache-control max-age=600; links had no version) → new markup with old styles. Fixes: CSS/JS links get `?v=<build time>` (head.html) so every build forces fresh files; banner arrow svg gets width/height=16 attributes (never huge even without CSS); video/poster `object-fit: contain` (shown whole); video speed via `data-speed` from platform.yml `viewer_video_speed` (2), set in viewer-video.js. If the video still does not play after a hard refresh: check the browser (Safari/older iPhones may not play WebM → poster only) and the system "reduce motion"/"animations off" setting (video intentionally stays on the poster).


### 6.2 Section status
- 0 Site-wide: AGREED, IMPLEMENTED (§6.3)
- 1 Header (+ UDL banner): AGREED, IMPLEMENTED (§6.4)
- 2 Hero: AGREED, IMPLEMENTED (§6.5)
- 3 How we work: AGREED, IMPLEMENTED (§6.6)
- 4 Solutions: AGREED, IMPLEMENTED (§6.7)
- 5 CTA band: AGREED, NO CHANGES (§6.8)
- 6 Who we are: AGREED, IMPLEMENTED (§6.9)
- 7 Footer: AGREED, IMPLEMENTED (§6.10)
- 8 Legal + 404: AGREED, IMPLEMENTED (§6.11)
- Implementation of all agreed sections: IMPLEMENTED 2026-11-03 (§6.12), incl. L1, L2 and cleanup

---

## 4. Screenshots log (folder `screenshots/`, not published)
| Date | Files | State captured |
|---|---|---|
| 2026-11-02 | `screenshots/2026-11-02_home_1280px.png`, `screenshots/2026-11-02_home_390px.png` | **First full English draft** (task §3), before the style review: Hero → Platform → Solutions (3 tools) → CTA band → footer in the draft look (Ubuntu, #2D5F3F). Headless Firefox, local build. (An earlier in-progress snapshot was deleted at Matteo's request.) |
| 2026-11-02 | `screenshots/2026-11-02_home_1280px_after-style-review.png`, `screenshots/2026-11-02_home_390px_after-style-review.png` | Same draft **after the simple style fixes** of §3.8 (lighter titles, rounder/taller buttons, tighter spacing, slim CTA band, white footer text). |
| 2026-11-03 | `screenshots/2026-11-03_home_1280px_after-section-review.png`, `screenshots/2026-11-03_home_390px_after-section-review.png` | **After the section-by-section review (§5)**, incl. the style-revisor's simple fixes: Hero (new copy, booking button) → How we work (paragraphs, platform hub with screenshot placeholder, steps) → Solutions table → green band "Get in touch" → Who we are (photo placeholder) → footer with UDL strip + 4 columns. Headless Firefox, local build. |
| 2026-11-03 | `screenshots/2026-11-03_home_1280px_after-review2.png`, `screenshots/2026-11-03_home_390px_after-review2.png`, `screenshots/2026-11-03_imprint_1280px_after-review2.png` | **After review #2 (§6)** incl. the style-revisor's simple fixes: UDL banner under the header → hero with tree → How we work (title, hub with video poster, steps, button, paragraphs) → Solutions (table; phone cards with pills) → green band → Who we are (Our values, Matteo + Patrick round photos) → UDL banner → footer (Imprint only). Imprint page. Headless Firefox, reduced motion. Retaken after L1/L2, cleanup and Patrick's re-crop. |
