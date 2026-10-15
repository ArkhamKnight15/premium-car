import { ArrowUpRight, ChevronDown, Quote, Star } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Container'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { reviews } from '../data/reviews'
import { cn } from '../lib/cn'
import { googleReviewsUrl, googleWriteReviewUrl } from '../lib/google'
import { initials, shortName } from '../lib/names'
import type { Review } from '../types'

/** Quantas avaliações aparecem antes de "Ver mais" (celular / telas maiores). */
const INITIAL_MOBILE = 4
const INITIAL_DESKTOP = 6

export function Reviews() {
  const [expanded, setExpanded] = useState(false)
  const hasMore = reviews.length > INITIAL_MOBILE

  return (
    <section
      id="avaliacoes"
      aria-labelledby="avaliacoes-title"
      className="relative overflow-hidden border-t border-white/[0.06] bg-ink-950 py-24 sm:py-32 lg:py-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 left-[-10%] size-[40rem] rounded-full bg-brand-400/[0.05] blur-3xl"
      />

      <Container className="relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="avaliacoes-title"
            eyebrow="Avaliações"
            title={
              <>
                Quem conhece, <span className="text-metal">recomenda.</span>
              </>
            }
            subtitle="O que nossos clientes dizem sobre a Premium Car no Google."
          />
          <Reveal delay={120}>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button href={googleReviewsUrl} external variant="outline" icon={<ArrowUpRight className="size-4" />}>
                Ver todas no Google
              </Button>
              {googleWriteReviewUrl && (
                <Button href={googleWriteReviewUrl} external variant="ghost" icon={<ArrowUpRight className="size-4" />}>
                  Avaliar a Premium Car
                </Button>
              )}
            </div>
          </Reveal>
        </div>

        <ul id="lista-avaliacoes" className="mt-14 gap-5 sm:columns-2 lg:mt-20 lg:columns-3 lg:gap-6">
          {reviews.map((review, index) => (
            <li
              key={review.author}
              className={cn(
                'mb-5 break-inside-avoid lg:mb-6',
                !expanded && index >= INITIAL_MOBILE && 'max-sm:hidden',
                !expanded && index >= INITIAL_DESKTOP && 'hidden',
              )}
            >
              <Reveal delay={(index % 3) * 90}>
                <ReviewCard review={review} />
              </Reveal>
            </li>
          ))}
        </ul>

        {hasMore && !expanded && (
          <div className={cn('mt-4 flex justify-center', reviews.length <= INITIAL_DESKTOP && 'sm:hidden')}>
            <button
              type="button"
              onClick={() => setExpanded(true)}
              aria-controls="lista-avaliacoes"
              aria-expanded={expanded}
              className="group inline-flex h-11 items-center gap-2 rounded-full border border-white/15 px-6 text-[0.8125rem] font-semibold tracking-wide text-snow transition-colors hover:border-white/35 hover:bg-white/[0.06]"
            >
              Ver mais avaliações
              <ChevronDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
            </button>
          </div>
        )}
      </Container>
    </section>
  )
}

function Stars({ count = 5, className, label }: { count?: number; className?: string; label: string }) {
  return (
    <span role="img" aria-label={label} className="flex items-center gap-1 text-brand-400">
      {Array.from({ length: count }, (_, index) => (
        <Star key={index} className={className} fill="currentColor" strokeWidth={0} aria-hidden="true" />
      ))}
    </span>
  )
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="group relative rounded-2xl border border-white/[0.07] bg-ink-850/70 p-7 transition-[border-color,transform] duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:border-brand-400/30 sm:p-8">
      <div className="flex items-center justify-between">
        <Stars count={review.rating} className="size-4" label={`${review.rating} de 5 estrelas`} />
        <Quote className="size-7 text-white/10 transition-colors duration-500 group-hover:text-brand-400/40" aria-hidden="true" />
      </div>

      <blockquote className="mt-5 text-[0.9375rem] leading-relaxed text-silver-200 sm:text-base">
        <p>“{review.text}”</p>
      </blockquote>

      <figcaption className="mt-7 flex items-center gap-3 border-t border-white/[0.06] pt-5">
        <span
          aria-hidden="true"
          className="grid size-10 shrink-0 place-items-center rounded-full border border-brand-400/30 bg-brand-400/10 font-display text-xs font-semibold text-brand-200"
        >
          {initials(review.author)}
        </span>
        <span className="flex flex-col">
          <span className="text-sm font-semibold text-snow">{shortName(review.author)}</span>
          <span className="text-xs text-silver-500">{review.localGuide ? 'Local Guide · Google' : 'Avaliação no Google'}</span>
        </span>
      </figcaption>
    </figure>
  )
}
