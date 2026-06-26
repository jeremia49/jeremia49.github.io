# Jeremia Manurung — Portfolio & Blog

Personal portfolio and blog built with [Astro](https://astro.build) + Markdown,
deployed automatically to **GitHub Pages**.

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
