'use client'

import { Award, CheckCircle2, Handshake, ShieldCheck, UsersRound } from 'lucide-react'
import type { ComponentType } from 'react'

const values: Array<{
  title: string
  description: string
  icon: ComponentType<{ className?: string; 'aria-hidden'?: boolean }>
}> = [
  {
    title: 'Reliability',
    description: 'Delivering on our promises with consistent and dependable service.',
    icon: CheckCircle2,
  },
  {
    title: 'Safety',
    description: 'The safety of our cargo, people, and environment is our top priority.',
    icon: ShieldCheck,
  },
  {
    title: 'Integrity',
    description: 'We conduct our business with honesty, transparency, and ethical standards.',
    icon: Handshake,
  },
  {
    title: 'Customer Focus',
    description: 'Our customers are at the heart of everything we do.',
    icon: UsersRound,
  },
  {
    title: 'Excellence',
    description: 'We continuously improve to deliver outstanding quality and results.',
    icon: Award,
  },
]

export default function OurValues() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24" aria-labelledby="our-values-title">
      <div className="absolute inset-x-0 top-0 h-px bg-[#e5e7eb]" aria-hidden="true" />
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <div className="mb-10 flex flex-col gap-3 sm:mb-12 lg:mb-14">
          <h2 id="our-values-title" className="text-4xl font-bold tracking-[-0.04em] text-[#2B3386] sm:text-5xl lg:text-6xl">
            Our Values
          </h2>
          <p className="text-lg font-semibold tracking-[-0.02em] text-[#2B3386] sm:text-xl">The Principles That Drive Us</p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
          {values.map(({ title, description, icon: Icon }, index) => (
            <article
              className={`group flex min-h-[270px] flex-col rounded-xl border border-[#e1e5eb] bg-white p-7 shadow-[0_6px_18px_rgba(15,23,42,0.06)] transition-all duration-300 ease-out hover:scale-[1.02] hover:border-[#2B3386]/40 hover:shadow-[0_16px_30px_rgba(15,23,42,0.11)] motion-reduce:transition-none motion-reduce:hover:scale-100 sm:p-8 lg:col-span-2 ${index === 3 ? 'lg:col-start-2' : ''} ${index === 4 ? 'lg:col-start-4' : ''}`}
              key={title}
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[#dfe5ec] bg-[#fbfcfd] text-[#2B3386] transition-colors duration-300 group-hover:border-[#EF7120]/60 group-hover:text-[#EF7120] motion-reduce:transition-none" aria-hidden="true">
                <Icon className="h-6 w-6"  aria-hidden />
              </div>
              <div className="mt-7">
                <h3 className="text-xl font-bold tracking-[-0.025em] text-[#2B3386] sm:text-[22px]">{title}</h3>
                <p className="mt-4 max-w-prose text-base leading-7 text-[#2B3386]/80 sm:text-[17px] sm:leading-8">{description}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-14 text-center text-xl font-semibold tracking-[-0.03em] text-[#2B3386] sm:mt-16 sm:text-2xl lg:text-3xl">
          Generating <span className="text-[#EF7120]">&apos;Hope&apos;</span> <span className="mx-1 inline-block text-[#EF7120]" aria-hidden="true">→</span> Delivering <span className="text-[#EF7120]">&apos;Trust&apos;</span>
        </p>
      </div>
    </section>
  )
}

