export function normalizeSiteBase(base = '/') {
  const value = String(base || '/').trim();
  if (value === '/') return '/';
  return `/${value.replace(/^\/+|\/+$/g, '')}/`;
}

function isExternalOrLocalReference(path) {
  return /^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(path);
}

export function withSiteBase(path, base = '/') {
  const value = String(path || '/');
  if (isExternalOrLocalReference(value)) return value;

  const normalizedBase = normalizeSiteBase(base);
  const rooted = value.startsWith('/') ? value : `/${value}`;
  if (normalizedBase === '/') return rooted;
  if (rooted === normalizedBase.slice(0, -1) || rooted.startsWith(normalizedBase)) return rooted;
  return `${normalizedBase}${rooted.slice(1)}`;
}
