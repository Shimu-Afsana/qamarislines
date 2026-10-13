'use client'

import type { LucideIcon } from 'lucide-react'
import { ArrowRight, Ship } from 'lucide-react'

type ScheduleServiceCardProps = {
  index: string
  title: string
  description: string
  route: string[]
  icon?: LucideIcon
}

export function ScheduleServiceCard({
  index,
  title,
  description,
  route,
  icon: Icon = Ship,
}: ScheduleServiceCardProps) {
  return (
    <article className="schedule-card group flex min-h-[330px] flex-col items-center rounded-2xl border border-[#dce0ea] bg-white p-6 text-center shadow-[0_12px_34px_rgba(43,51,134,0.07)] transition-[transform,box-shadow,border-color] duration-400 ease-out hover:-translate-y-1 hover:border-[#EF7120]/55 hover:shadow-[0_20px_44px_rgba(43,51,134,0.14)] motion-reduce:transition-none sm:p-8">
      <div className="flex size-14 items-center justify-center rounded-xl border border-[#e5e7ef] bg-[#f8f9fc] text-[#2B3386] transition-transform duration-400 ease-out group-hover:scale-105 group-hover:border-[#EF7120]/40 group-hover:text-[#EF7120] motion-reduce:transition-none">
        <Icon aria-hidden="true" size={27} strokeWidth={1.8} />
      </div>

      <div className="mt-5 flex flex-col items-center">
        <span className="rounded-full bg-[#2B3386] px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white">
          {index}. {title}
        </span>
        <p className="mt-4 text-sm leading-6 text-[#596181]">{description}</p>
      </div>

      <div className="mt-6 flex w-full flex-wrap items-center justify-center gap-x-2.5 gap-y-2.5 text-sm font-medium leading-6 text-[#2B3386] sm:gap-x-3">
        {route.map((port, portIndex) => (
          <span className="inline-flex items-center gap-2.5" key={`${port}-${portIndex}`}>
            <span className="whitespace-normal">{port}</span>
            {portIndex < route.length - 1 && (
              <ArrowRight
                aria-hidden="true"
                className="route-arrow shrink-0 text-[#EF7120]"
                size={15}
                strokeWidth={2.5}
              />
            )}
          </span>
        ))}
      </div>
    </article>
  )
}

export function ScheduleStyles() {
  return (
    <style>{`
      @keyframes schedule-card-in {
        from { opacity: 0; transform: translateY(18px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes schedule-arrow-nudge {
        0%, 100% { transform: translateX(0); }
        50% { transform: translateX(2px); }
      }
      .schedule-card {
        animation: schedule-card-in 650ms cubic-bezier(.22,1,.36,1) both;
      }
      .schedule-card:nth-child(2) { animation-delay: 90ms; }
      .schedule-card:nth-child(3) { animation-delay: 180ms; }
      .schedule-card:nth-child(4) { animation-delay: 270ms; }
      .schedule-card:hover .route-arrow {
        animation: schedule-arrow-nudge 850ms ease-in-out infinite;
      }
      @media (prefers-reduced-motion: reduce) {
        .schedule-card, .schedule-card:nth-child(2), .schedule-card:nth-child(3), .schedule-card:nth-child(4) {
          animation: none;
        }
        .schedule-card:hover .route-arrow { animation: none; }
      }
    `}</style>
  )
}

type ScheduleRoute = Omit<ScheduleServiceCardProps, 'icon'> & { icon: LucideIcon }
export type { ScheduleRoute }


