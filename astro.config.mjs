// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// =============================================================
//  SITE / DEPLOY CONFIG  — edit these two lines for your repo
// =============================================================
//
//  CASE A — User site (repo named  jeremia49.github.io):
//      site: 'https://jeremia49.github.io'
//      base: '/'                       (leave base unset / '/')
//
//  CASE B — Project site (repo named e.g. "portfolio"):
//      site: 'https://jeremia49.github.io'
//      base: '/portfolio'
//
//  The default below is configured for CASE A (user site).
// =============================================================

export default defineConfig({
  site: 'https://jeremia49.github.io',
  base: '/',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
