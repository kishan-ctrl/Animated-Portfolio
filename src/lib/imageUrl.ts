export function normalizeImageUrl(value: unknown) {
  if (typeof value !== 'string') return ''

  return value.trim().replace(/^["']+|["']+$/g, '')
}
