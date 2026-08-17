/**
 * Same-origin check for browser form POSTs.
 * If Origin is present it must match. Otherwise Referer must start with origin.
 */
export function isSameOrigin(request: Request): boolean {
  const url = new URL(request.url);
  const expected = url.origin;
  const origin = request.headers.get("origin");

  if (origin) {
    return origin === expected;
  }

  const referer = request.headers.get("referer");
  if (!referer) return false;

  try {
    return new URL(referer).origin === expected;
  } catch {
    return false;
  }
}
