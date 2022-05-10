/**
 * Returns absolute path to a public asset.
 * @example
 * // returns /img/flags/de-DE.svg
 * getRootUrl(img/flags/de-DE.svg)
 * @param {string} relativeUrl
 */
export function getRootUrl (relativeUrl: string): string {
  const { VITE_BASE = '/' } = import.meta.env;
  return `${VITE_BASE}${relativeUrl}`;
}
