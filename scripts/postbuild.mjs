// Work-in-progress gate, applied after the build.
// Default (`npm run build`) publishes the real landing page at "/".
// With SITE_WIP=true the built index.html is replaced by a self-contained
// placeholder, and the now-orphaned asset bundle plus the /en/ redirect are
// removed so the unfinished design can't be reached or discovered.
//
//   - locally:    SITE_WIP=true npm run build
//   - Cloudflare: add SITE_WIP=true in Pages → Settings → Environment variables
import { rmSync, writeFileSync, existsSync } from 'node:fs';

const WIP = process.env.SITE_WIP === 'true';

if (!WIP) {
  console.log('[postbuild] full-site mode: dist left intact.');
  process.exit(0);
}

const placeholder = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex, nofollow" />
    <title>bluestove.com</title>
    <style>
      html, body { margin: 0; height: 100%; }
      body {
        min-height: 100vh;
        background: #000;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 24px;
        box-sizing: border-box;
        text-align: center;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
      }
      .wip {
        font-size: 36pt;
        font-weight: 700;
        line-height: 1.35;
        letter-spacing: -0.01em;
        word-break: keep-all;
      }
      @media (max-width: 420px) {
        .wip { font-size: 26pt; }
      }
    </style>
  </head>
  <body>
    <main class="wip">bluestove.com<br />work in progress</main>
  </body>
</html>
`;

writeFileSync('dist/index.html', placeholder);

for (const orphan of ['dist/_astro', 'dist/en']) {
  if (existsSync(orphan)) rmSync(orphan, { recursive: true, force: true });
}

console.log('[postbuild] WIP mode: placeholder published, landing assets removed.');
