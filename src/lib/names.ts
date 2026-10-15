/** "Edgard Chaves Fracassi" → "Edgard F." (primeiro nome + inicial do último sobrenome). */
export function shortName(fullName: string): string {
  const parts = fullName.trim().split(/\s+/)
  if (parts.length < 2) return parts[0] ?? ''
  return `${parts[0]} ${parts.at(-1)!.charAt(0)}.`
}

/** Iniciais para o avatar: "Edgard Chaves Fracassi" → "EF". */
export function initials(fullName: string): string {
  const parts = fullName.trim().split(/\s+/)
  return ((parts[0]?.charAt(0) ?? '') + (parts.length > 1 ? parts.at(-1)!.charAt(0) : '')).toUpperCase()
}
