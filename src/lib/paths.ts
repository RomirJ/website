
/**
 * Helper function to construct paths with the correct base URL
 * Works both for GitHub Pages (/website/) and root domain (/)
 */
export const withBase = (path: string): string => {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return import.meta.env.BASE_URL + cleanPath;
};

/**
 * Helper function for external links that should always be absolute
 */
export const externalLink = (url: string): string => {
  return url.startsWith('http') ? url : `https://${url}`;
};
