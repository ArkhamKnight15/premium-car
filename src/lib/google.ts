import { site } from '../config/site'

const placeId = site.googlePlaceId.trim()

/** Lista de avaliações no Google (ou o perfil da empresa, enquanto o Place ID não for informado). */
export const googleReviewsUrl = placeId
  ? `https://search.google.com/local/reviews?placeid=${encodeURIComponent(placeId)}`
  : site.googleBusinessUrl

/** Tela para o cliente escrever uma avaliação; `null` enquanto o Place ID não for informado. */
export const googleWriteReviewUrl = placeId
  ? `https://search.google.com/local/writereview?placeid=${encodeURIComponent(placeId)}`
  : null

/** Nota formatada em português: 4.9 → "4,9". */
export function formatRating(value: number): string {
  return value.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })
}
