import type { ScheduleVariant } from './schedule-data'

type ScheduleTableProps = { schedule: ScheduleVariant }

export function ScheduleTable({ schedule }: ScheduleTableProps) {
  return (
    <div className="schedule-table-shell" tabIndex={0} aria-label={`${schedule.subtitle} data table`}>
      <table className="schedule-table">
        <caption className="sr-only">{schedule.title} {schedule.subtitle}</caption>
        <colgroup>
          <col className="vessel-column" /><col className="voyage-column" />
          {schedule.ports.flatMap((port, index) => [
            <col className="port-column" key={`${port.name}-${index}-eta`} />,
            <col className="port-column" key={`${port.name}-${index}-etd`} />,
          ])}
        </colgroup>
        <thead>
          <tr>
            <th className="sticky-vessel sticky-head" rowSpan={2} scope="col">Vessel</th>
            <th className="sticky-voyage sticky-head" rowSpan={2} scope="col">Voyage</th>
            {schedule.ports.map((port, index) => <th colSpan={2} scope="colgroup" key={`${port.name}-${index}`}>{port.name}</th>)}
          </tr>
          <tr>
            {schedule.ports.flatMap((port, index) => [
              <th className="subhead" scope="col" key={`${port.name}-${index}-eta`}>ETA</th>,
              <th className="subhead" scope="col" key={`${port.name}-${index}-etd`}>ETD</th>,
            ])}
          </tr>
        </thead>
        <tbody>
          {schedule.rows.map((item, rowIndex) => (
            <tr key={`${item.vessel}-${item.voyage}-${rowIndex}`}>
              <th className="sticky-vessel body-vessel" scope="row">{item.vessel}</th>
              <td className="sticky-voyage body-voyage">{item.voyage}</td>
              {item.calls.flatMap((call, index) => [
                <td key={`${item.voyage}-${index}-eta`}>{call.eta}</td>,
                <td key={`${item.voyage}-${index}-etd`}>{call.etd}</td>,
              ])}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
