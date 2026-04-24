/**
 * Canonical origin for metadata, sitemap, and robots (no trailing slash).
 * Set NEXT_PUBLIC_SITE_URL in Vercel when using a custom domain.
 */
export function getPublicSiteOrigin(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (raw) return raw.replace(/\/$/, "")
  return "https://jan-chael-joven-and-norenel-rsvp.vercel.app"
}
