export function createPageUrl(pageName: string): string {
  return `/${pageName.toLowerCase().replace(/\s+/g, '-')}`;
}
