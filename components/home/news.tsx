'use client'

import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const featuredNews = {
  date: '03/02/26',
  title:
    'Our vessel is commencing cargo operations and preparing for her maiden voyage — a milestone achieved through patience, dedication, and countless sleepless nights.',
  image: '/images/Qamaris Progress ship.jpg',
  href: 'https://example.com/qamaris-lines-maiden-voyage',
}

const newsItems = [
  {
    date: '17/09/26',
    title: 'Qamaris Lines expands regional shipping connectivity across key trade routes.',
    href: 'https://example.com/qamaris-lines-regional-connectivity',
  },
  {
    date: '10/10/26',
    title: 'Qamaris Lines strengthens reliable container liner services.',
    href: 'https://example.com/qamaris-lines-liner-services',
  },
  {
    date: '30/09/26',
    title: 'Qamaris Lines continues expanding its regional logistics network.',
    href: 'https://example.com/qamaris-lines-logistics-network',
  },
  {
    date: '13/10/26',
    title: 'New developments in Qamaris Lines    shipping and logistics services.',
    href: 'https://example.com/qamaris-lines-developments',
  },
]

export default function News() {
  return (
    <section
      aria-labelledby="news-heading"
      className="news-section relative overflow-hidden bg-[#fcfcfb] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div aria-hidden="true" className="news-texture absolute inset-0 opacity-70" />
      <div className="relative mx-auto max-w-7xl">
        <header className="news-reveal mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#EF7120]">
            Qamaris Lines journal
          </p>
          <h2
            id="news-heading"
            className="font-[Biome,Arial,sans-serif] text-4xl font-medium tracking-[-0.04em] text-[#2B3386] sm:text-5xl"
          >
            NEWS
          </h2>
          <p className="mt-4 text-sm leading-6 text-[#5f6274] sm:text-[15px]">
            Stay updated with the latest announcements and industry developments.
          </p>
        </header>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-14 xl:gap-20">
          <article className="news-reveal [animation-delay:120ms]">
            <a
              href={featuredNews.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EF7120]"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={featuredNews.image}
                  alt="Container ship sailing on calm water"
                  width={1200}
                  height={760}
                  className="aspect-[1.55] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                  priority
                />
                <span className="absolute left-0 top-0 bg-[#2B3386] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                  News
                </span>
              </div>
              <div className="mt-6 max-w-2xl">
                <time className="text-[11px] font-semibold tracking-[0.08em] text-[#EF7120]">
                  {featuredNews.date}
                </time>
                <h3 className="mt-3 font-[Biome,Arial,sans-serif] text-lg leading-7 tracking-[-0.015em] text-[#2B3386] transition-colors duration-300 group-hover:text-[#EF7120] sm:text-xl sm:leading-8">
                  {featuredNews.title}
                </h3>
              </div>
            </a>
          </article>

          <div className="flex flex-col">
            {newsItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="news-reveal group flex min-h-28 items-start justify-between gap-5 border-b border-[#2B3386]/12 py-5 first:pt-0 last:border-b-0 last:pb-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EF7120] [animation-delay:calc(180ms+var(--row-index)*90ms)]"
                style={{ '--row-index': index } as React.CSSProperties}
              >
                <span className="flex min-w-0 flex-1 flex-col gap-3">
                  <time className="text-[11px] font-semibold tracking-[0.08em] text-[#EF7120]">
                    {item.date}
                  </time>
                  <span className="font-[Biome,Arial,sans-serif] text-[15px] leading-6 text-[#2B3386] transition-colors duration-300 group-hover:text-[#EF7120] sm:text-base">
                    {item.title}
                  </span>
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="mt-7 shrink-0 text-[#EF7120] transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1"
                  size={18}
                  strokeWidth={1.8}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .news-texture {
          background-image: radial-gradient(rgba(43, 51, 134, 0.09) 0.7px, transparent 0.7px);
          background-size: 6px 6px;
          mask-image: linear-gradient(to bottom, black, transparent 92%);
        }

        .news-reveal {
          animation: news-reveal 900ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @keyframes news-reveal {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.99);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .news-reveal {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}

