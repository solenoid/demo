/**
 * Simple date parse to make it an ISO 8601 date
 */
export const parseDate = (date: string | undefined) => {
  if (!date) return '1980-01-01'
  const [month, day, year] = date.split('/')
  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
}

/**
 * Puts the trailing T00:00 on a date so it parses as local and not UTC
 */
export const localDate = (date?: string) => {
  if (!date) return '1980-01-01T00:00'
  // Until Temporal is around rely on:
  // > Date-only strings (e.g. "1970-01-01") are treated as UTC,
  // > while date - time strings(e.g. "1970-01-01T12:00") are treated as local.
  return `${date}T00:00`
}
