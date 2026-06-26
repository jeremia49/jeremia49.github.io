# How to add content

Everything is Markdown. Add a file, fill in the front-matter (the `---` block at
the top), write your content below it, then `git add . && git commit && git push`.

---

## A. Add a new PROJECT

Create a file in `src/content/projects/`, e.g. `src/content/projects/my-app.md`.
The file name becomes the URL: `/projects/my-app`.

```markdown
---
title: "My Awesome App"
description: "One-sentence summary shown on cards and in search results."
date: 2026-06-14            # YYYY-MM-DD — newest sorts first
tags: ["Web", "React"]      # shown as chips
tech: ["React", "Node.js", "PostgreSQL"]   # tech-stack chips
featured: true              # true = pinned + shown on the home page
draft: false                # true = hidden from the site (work in progress)

# Cover image (optional): drop the file in this same folder, then:
cover: ./cover.jpg

# Embedded video (optional): a YouTube/Vimeo URL OR a file in public/media/
video: "https://www.youtube.com/watch?v=XXXXXXXXXXX"

# External links (optional): live demo, repo, paper, etc.
links:
  - label: "Live Demo"
    url: "https://example.com"
  - label: "Source Code"
    url: "https://github.com/jeremia49/my-app"

# Photo gallery (optional): files in public/media/ or full URLs
gallery:
  - "/media/my-app/screen1.png"
  - "/media/my-app/screen2.png"
---

## Overview

Write the full story here in Markdown. You can use headings, lists, **bold**,
`code`, code blocks, links, and images.

![A diagram](./diagram.png)

```python
print("code blocks work too")
```
```

Every front-matter field except `title`, `description`, and `date` is optional.

---

## B. Add a new BLOG POST

Create a file in `src/content/blog/`, e.g. `src/content/blog/my-post.md`.
The file name becomes the URL: `/blog/my-post`.

```markdown
---
title: "My Post Title"
description: "Short summary for the listing and SEO."
date: 2026-06-14
updated: 2026-06-20        # optional
tags: ["Notes", "AI"]
cover: ./cover.jpg          # optional
draft: false
---

Write your article here in Markdown.
```

---

## C. Working with media (photos, videos, URLs)

There are two places media can live. Pick based on what it is:

### 1. Cover & inline images → next to the `.md` file (recommended)

Put the image in the **same folder** as your Markdown file and reference it with
a relative path starting with `./`:

```markdown
cover: ./cover.jpg
```
```markdown
![Screenshot](./screenshot.png)
```

Astro automatically optimizes these (resizes, converts to modern formats,
lazy-loads). This is the best option for quality and speed.

### 2. Videos & large/galleries files → `public/media/`

Files in `public/` are served exactly as-is (not optimized). Good for video
files and gallery images you reference by path.

1. Drop the file in `public/media/`, e.g. `public/media/demo.mp4`.
2. Reference it with a path starting with `/media/`:

```markdown
video: "/media/demo.mp4"
gallery:
  - "/media/photo1.jpg"
  - "/media/photo2.jpg"
```

### 3. Videos hosted on YouTube / Vimeo

Just paste the normal URL — it gets embedded as a responsive player:

```markdown
video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
video: "https://vimeo.com/123456789"
```

### 4. External URLs (demos, repos, papers)

Use the `links` array on projects (see section A), or inline Markdown links
anywhere in the body:

```markdown
Read the [published paper](https://doi.org/10.24014/ijaidm.v8i1.31866).
```

---

## D. Update your CV / About page

All CV data is in **`src/data/site.ts`** as plain arrays. Edit the relevant
section — `about`, `employment`, `education`, `publications`, `skills`,
`awards`, `certifications` — and your contact details in `site`.
The home page and About page update automatically.

---

## E. Hide something temporarily

Set `draft: true` in its front-matter. It stays in the repo but disappears from
the live site (and from listings, RSS, and the sitemap). Flip it back to
`draft: false` when ready.

---

## F. Publish

```bash
git add .
git commit -m "Add project: My Awesome App"
git push
```

GitHub Actions rebuilds and redeploys automatically (~1–2 min). Check the
**Actions** tab on GitHub if you want to watch it.

### Tip: preview before pushing

```bash
npm run dev
```

Open http://localhost:4321 and check it looks right, then commit and push.
