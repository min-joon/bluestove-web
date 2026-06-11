// @ts-check
import { defineConfig } from 'astro/config';

// Pure static site — deployed to Cloudflare Pages (output dir: dist).
// No adapter needed: the contact form is handled by an external service (Web3Forms).
export default defineConfig({
  site: 'https://bluestove.pages.dev',
  redirects: {
    // The landing page used to live at /en/. Keep old links working.
    '/en/': '/',
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
