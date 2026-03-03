const BASE_PATH = process.env.NODE_ENV === 'production' ? '/atheer' : '';

export function withBasePath(path: string): string {
  if (!path) return path;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_PATH}${normalized}`;
}
