// Stellt sicher, dass alle internen Links den GitHub-Pages-Basispfad
// (/learnAREAL) enthalten. Immer für interne Links und Assets verwenden.
const base = import.meta.env.BASE_URL.replace(/\/+$/, '');

export function withBase(path) {
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
