// Post-build cleanup.
// In WIP mode the only real output is the placeholder index.html (inline-styled,
// references nothing). Astro still compiles the parked /[lang] route and emits an
// orphaned CSS/JS bundle into dist/_astro that no page links — but it would still
// sit publicly in the directory and leak the unfinished design system. Remove it.
//
// In full-site mode (the default) the bundle is referenced by the real pages,
// so we leave dist untouched. Set SITE_WIP=true to enable the placeholder gate.
import { rmSync, existsSync } from 'node:fs';

const WIP = process.env.SITE_WIP === 'true';

if (WIP && existsSync('dist/_astro')) {
  rmSync('dist/_astro', { recursive: true, force: true });
  console.log('[postbuild] WIP mode: removed orphaned dist/_astro bundle.');
} else {
  console.log('[postbuild] full-site mode: dist left intact.');
}
