// Work-in-progress gate.
// While WIP is ON, the build emits ONLY the placeholder page — the real /en and
// /ko pages are not generated at all (so they can't be reached or discovered),
// and the root redirect is disabled. The real source stays in the repo.
//
// The landing page is the default. To temporarily hide it, turn WIP ON:
//   - locally:    SITE_WIP=true npm run dev   (or put SITE_WIP=true in .env)
//   - Cloudflare: add SITE_WIP=true in Pages → Settings → Environment variables
//
// Default is OFF so a plain `npm run build` publishes the landing page.
//
// Read from process.env only: this module is imported solely from server-side
// build contexts (page frontmatter, getStaticPaths), where process.env is the
// real, untransformed build environment. (import.meta.env coerces "false" to a
// boolean and is unreliable here.)
const value = typeof process !== 'undefined' ? process.env.SITE_WIP : undefined;

export const WIP = value === 'true';
