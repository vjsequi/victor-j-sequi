# Victor J. Sequi - Personal Website

A personal portfolio and work journal. Built with Astro, local fonts, Markdown content, and static GitHub Pages deployment.

Public website: https://victorjsequi.com/

## Local development

Use Node 24 (see `.nvmrc`).

```sh
npm ci
npm run dev
```

The terminal prints the local URL. Build and inspect the production output with:

```sh
npm test
npm run build
npm run preview
```

## Content

- `src/content/projects/`: project case studies.
- `src/content/notes/`: dated field notes.
- `src/pages/now.astro`: current focus and next item to document.
- `src/pages/about.astro`: professional profile.
- `src/lib/site.ts`: public identity and sole contact destination.
- `src/styles/global.css`: visual design.

New content defaults to unpublished. Set `draft: false` deliberately after reviewing its wording and disclosure scope.

The initial copy distinguishes production work, prototypes, and historical projects. No user counts, revenue, learning improvements, employer metrics, or quantified performance claims have been invented.

## GitHub Pages

1. Create the destination GitHub repository and push this repository's `main` branch.
2. In **Settings > Pages > Build and deployment**, select **GitHub Actions**.
3. Run the **Deploy to GitHub Pages** workflow, or push to `main`.

The workflow reads the destination origin and base path from GitHub Pages. It works with both a project URL and a root/custom domain without hardcoding a GitHub username.

The production custom domain is `victorjsequi.com`. Porkbun DNS uses an apex ALIAS and a `www` CNAME pointing to `vjsequi.github.io`. Keep the GitHub domain-verification TXT record in place. GitHub Pages manages the HTTPS certificate and redirects `www` to the primary domain. No `CNAME` file is needed for the Actions deployment.

Pull requests run checks and build the site without publishing. Deployment uploads only `dist/`.

To check a project subpath locally:

```sh
SITE_URL=https://example.invalid BASE_PATH=/personal-website npm run build
npm run preview
```

Clear the two variables for a normal root-path build. The production workflow supplies the GitHub Pages URL and repository path automatically.

## Public-content policy

LinkedIn is the only contact destination. Keep personal contact details, precise location, private documents, credentials, employer internals, private repository URLs, and personal financial records out of this repository, including unpublished Markdown.

`npm run build` scans the source, public assets' text, and final HTML for common contact details, personal location, local paths, credential patterns, source maps, and unapproved outbound links. This is a guardrail, not a replacement for reviewing text and images.

The portrait is a metadata-stripped derivative of an existing profile asset. Project cover graphics are editorial identity treatments, not screenshots or evidence of product outcomes. Fonts are served locally. There are no analytics, third-party scripts, contact forms, trackers, or embedded social widgets.

No raw profile documents, internal source material, or financial data are included. Use a GitHub-provided no-reply commit identity for public commits.
