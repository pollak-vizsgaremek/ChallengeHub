// Utility to build API URLs from the Vite environment
const RAW_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:3300';
const NORMALIZED_BASE_URL = RAW_BASE_URL.replace(/\/+$/, '');

export const buildApiUrl = (path = '') => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${NORMALIZED_BASE_URL}${normalizedPath}`;
};
