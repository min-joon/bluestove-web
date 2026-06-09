// Cloudflare Pages Function — runs at the edge for every request.
// Only acts on the root path: redirects "/" to English.
// Korean copy remains in the source for possible future reuse, but /ko/ is not
// generated or exposed right now. Do not restore KR/cookie language redirects
// unless /ko/ static generation and the EN/KO switcher are restored together.
export async function onRequest(context) {
  const { request, next, env } = context;

  // While WIP is on, do not redirect — serve the placeholder as-is. The real
  // language pages aren't built, so a redirect would only land on a 404.
  const wip = (env?.SITE_WIP ?? 'true') !== 'false';
  if (wip) return next();

  const url = new URL(request.url);

  if (url.pathname === '/') {
    return new Response(null, {
      status: 302,
      headers: {
        Location: `${url.origin}/en/`,
        'Cache-Control': 'no-store',
      },
    });
  }

  return next();
}
