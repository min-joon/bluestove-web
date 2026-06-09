// Work-in-progress gate.
// While WIP is ON, the build emits ONLY the placeholder page — the real /en and
// /ko pages are not generated at all (so they can't be reached or discovered),
// and the edge geo-redirect is disabled. The real source stays in the repo.
//
// To launch the full site, turn WIP OFF: set the env var SITE_WIP=false
//   - locally:    SITE_WIP=false npm run dev   (or put SITE_WIP=false in .env)
//   - Cloudflare: add SITE_WIP=false in Pages → Settings → Environment variables
//
// Default is ON (placeholder) so a plain `npm run build` can never accidentally
// publish the unfinished site.
//
// Read from process.env only: this module is imported solely from server-side
// build contexts (page frontmatter, getStaticPaths), where process.env is the
// real, untransformed build environment. (import.meta.env coerces "false" to a
// boolean and is unreliable here.)
const value = typeof process !== 'undefined' ? process.env.SITE_WIP : undefined;

export const WIP = value !== 'false';
