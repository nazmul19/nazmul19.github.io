export const formspree = {
  /**
   * Optional hard-coded endpoint (Formspree IDs are public).
   * Prefer GitHub Actions var/secret NEXT_PUBLIC_FORMSPREE_ENDPOINT at build time.
   * Accepts a full URL or just the form id (e.g. "xyzabcde").
   */
  endpoint: "",
} as const;

export function resolveFormspreeEndpoint(
  fromEnv = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT,
): string | null {
  const raw = (fromEnv || formspree.endpoint || "").trim();
  if (!raw) return null;

  if (/^https?:\/\//i.test(raw)) {
    return raw.replace(/\/$/, "");
  }

  // Allow pasting only the Formspree form id
  return `https://formspree.io/f/${raw.replace(/^\/+/, "")}`;
}
