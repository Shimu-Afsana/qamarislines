'use client'

import { Anchor, Globe2, Ship } from 'lucide-react'
import { ScheduleServiceCard, ScheduleStyles, type ScheduleRoute } from './schedule-service-card'

const services: ScheduleRoute[] = [
  {
    index: '1',
    title: 'OWN TONNAGE',
    description: 'Liner services connecting the following main ports:',
    icon: Ship,
    route: ['Kolkata', 'Haldia', 'Chittagong', 'Tuticorin', 'Colombo', 'Nhava Sheva', 'Nhava Sheva', 'Mundra', 'Karachi', 'Khor Fakkan', 'Jebel Ali', 'Dammam'],
  },
  {
    index: '2',
    title: 'SLOT CHARTERED',
    description: 'Liner services connecting the following major ports:',
    icon: Ship,
    route: ['Shanghai', 'Ningbo', 'Shekou', 'Singapore', 'Port Klan', 'Nhava Sheva', 'Nhava Sheva', 'Mundra', 'Karachi', 'Connecting to all Gulf ports.'],
  },
  {
    index: '3',
    title: 'TONNAGE SHARING',
    description: 'Red Sea Lines- connecting the following ports:',
    icon: Anchor,
    route: ['Dammam', 'Jebel Ali', 'Fujairah', 'Sohar', 'Mukalla', 'Aden', 'Bosaso', 'Berbera', 'Massawa', 'Djibouti', 'Hodeidah', 'Port Sudan', 'Jeddah', 'Aqaba', 'Ain Sokhna'],
  },
  {
    index: '4',
    title: 'CONNECTIVITY',
    description: 'We Connect :',
    icon: Globe2,
    route: ['Far East', 'Red Sea', 'East Africa', 'South Asia', 'Gulf', 'South East Asia', 'worldwide'],
  },
]

export function ScheduleService() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20" aria-labelledby="schedule-services-title">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#EF7120]">Qamaris Lines</p>
          <h1 id="schedule-services-title" className="mt-3 text-3xl font-semibold tracking-tight text-[#2B3386] sm:text-4xl">Schedule &amp; service connectivity</h1>
          <p className="mt-4 text-sm leading-7 text-[#596181] sm:text-base">A connected network of liner services across key global maritime routes.</p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-7">
          {services.map((service) => <ScheduleServiceCard key={service.index} {...service} />)}
        </div>
      </div>
      <ScheduleStyles />
    </section>
  )
}


