export function getFullUrl (relativeUrl: string): string {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - due to incorrect typing in .vue
  return new URL(relativeUrl, import.meta.url);
}
