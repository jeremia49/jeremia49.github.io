import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ---------------------------------------------------------------
//  PROJECTS collection  — portfolio entries
//  Files live in:  src/content/projects/*.md
// ---------------------------------------------------------------
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // YYYY-MM-DD — used for sorting (newest first)
      date: z.coerce.date(),
      // optional cover image: put the file next to the .md or in src/assets
      cover: image().optional(),
      // free-form tags shown as chips
      tags: z.array(z.string()).default([]),
      // tech stack chips
      tech: z.array(z.string()).default([]),
      // external links (live demo, repo, paper, etc.)
      links: z
        .array(
          z.object({
            label: z.string(),
            url: z.string().url(),
          })
        )
        .default([]),
      // optional embedded video (YouTube / Vimeo URL or local /media path)
      video: z.string().optional(),
      // a gallery of extra images (paths under /public or remote URLs)
      gallery: z.array(z.string()).default([]),
      // set true to hide from listings without deleting
      draft: z.boolean().default(false),
      // pin to the top of the projects list / show on home
      featured: z.boolean().default(false),
    }),
});

// ---------------------------------------------------------------
//  BLOG collection  — articles / activity logs
//  Files live in:  src/content/blog/*.md
// ---------------------------------------------------------------
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      cover: image().optional(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects, blog };
