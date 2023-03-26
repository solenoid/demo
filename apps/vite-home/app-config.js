// Assumes leading slash always, and no trailing slash unless exactly '/'
export const baseShortest = '/havarti'
export const base = `${baseShortest}/`

// NOTE paths should be most to least specific
export const apps = {
  [`${base}dill`]: 'dill.html',
  [`${base}plain`]: 'plain.html',
  [`${base}dill/ssr`]: 'dill_ssr.html',
  [`${base}plain/ssr`]: 'plain_ssr.html',
  [`${baseShortest}/ssr`]: 'index_ssr.html',
  [`${baseShortest}`]: 'index.html',
}
