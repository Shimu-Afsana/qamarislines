import { ScheduleService } from '@/components/schedule/schedule-services'
import { ScheduleTable } from '@/components/schedule/schedule-table'
import { scheduleVariants } from '@/components/schedule/schedule-data'

export default function Page() {
  return (
    <>
      <ScheduleService />

      {scheduleVariants.map((schedule, index) => (
        <section
          key={`${schedule.subtitle}-${index}`}
          className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
        >
          <div className="mb-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#EF7120]">
              Qamaris Lines
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-[#2B3386]">
              {schedule.title}
            </h2>

            <p className="mt-2 text-sm text-[#596181]">
              {schedule.subtitle}
            </p>
          </div>

       
<div>
  <p className="mb-2 text-right text-[11px] font-medium text-[#596181] sm:text-xs">
    Scroll horizontally to see full schedule →
  </p>

  <ScheduleTable schedule={schedule} />
</div>

        </section>
      ))}
    </>
  )
}

