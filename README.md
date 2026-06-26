# Jeremia Manurung — Portfolio & Blog

Personal portfolio and blog built with [Astro](https://astro.build) + Markdown,
deployed automatically to **GitHub Pages**.

- **Projects** — portfolio entries with photos, video, links, and a gallery.
- **Blog** — articles and activity logs.
- **About** — full CV (employment, education, publications, skills, awards, certifications).

All your CV data lives in one file: `src/data/site.ts`.
All content (projects + posts) is plain Markdown in `src/content/`.

---

## 1. Run it locally

You need [Node.js](https://nodejs.org) 18+ (you have Node 22).

```bash
npm install      # first time only
npm run dev      # start dev server at http://localhost:4321
```

Edit any file and the browser refreshes automatically. To preview the real
production build:

```bash
npm run build    # outputs to dist/
npm run preview  # serve dist/ at http://localhost:4321
```

---

## 2. One-time GitHub Pages setup

### Step A — pick your repo type and set the URL

Open `astro.config.mjs` and set `site` / `base`:

- **User site** (repo named exactly `jeremia49.github.io`) — *recommended, default*:
  ```js
  site: 'https://jeremia49.github.io',
  base: '/',
  ```
  Your site lives at `https://jeremia49.github.io`.

- **Project site** (repo named e.g. `portfolio`):
  ```js
  site: 'https://jeremia49.github.io',
  base: '/portfolio',
  ```
  Your site lives at `https://jeremia49.github.io/portfolio`.

> If your GitHub username is not `jeremia49`, replace it everywhere above
> (and in `src/data/site.ts`).

### Step B — create the repo and push

```bash
cd /mnt/d/cv
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/jeremia49/jeremia49.github.io.git
git push -u origin main
```

### Step C — turn on Pages

1. On GitHub, go to your repo → **Settings** → **Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.

That's it. The workflow in `.github/workflows/deploy.yml` builds and deploys on
every push to `main`. Watch progress under the repo's **Actions** tab. First
deploy takes ~1–2 minutes, then your site is live.

---

## 3. Day-to-day: publish a change

Any time you add or edit content:

```bash
git add .
git commit -m "Add new project: <name>"
git push
```

Pushing to `main` triggers an automatic rebuild and redeploy. No manual build needed.

---

## 4. Adding content

See **CONTENT.md** for the full guide. Quick version:

- **New project** → create `src/content/projects/my-project.md`
- **New blog post** → create `src/content/blog/my-post.md`
- **Update your CV** → edit `src/data/site.ts`

Then commit and push.

---

## Project structure

```
.
├─ astro.config.mjs        # site URL + base path (edit for your repo)
├─ src/
│  ├─ data/site.ts         # ← YOUR CV DATA (about, jobs, education, etc.)
│  ├─ content/
│  │  ├─ projects/*.md     # ← portfolio entries
│  │  └─ blog/*.md         # ← blog posts
│  ├─ content.config.ts    # content schema (front-matter fields)
│  ├─ pages/               # routes (home, about, projects, blog, rss)
│  ├─ layouts/ components/ # page shell + UI pieces
│  └─ styles/global.css    # all styling (dark/light auto)
├─ public/                 # static files served as-is
│  ├─ media/               # put videos / large files here
│  └─ favicon.svg
└─ .github/workflows/deploy.yml   # auto-deploy to GitHub Pages
```
