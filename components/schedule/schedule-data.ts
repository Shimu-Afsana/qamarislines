export type ScheduleCall = { eta: string; etd: string }

export type SchedulePort = { name: string }

export type ScheduleRow = {
  vessel: string
  voyage: string
  calls: ScheduleCall[]
}

export type ScheduleVariant = {
  title: string
  subtitle: string
  ports: SchedulePort[]
  rows: ScheduleRow[]
}

const ports = ['SHANGHAI', 'NINGBO', 'SHEKOU', 'SINGAPORE', 'PORT KLANG', 'NHAVA SHEVA', 'KHOR FAKKAN', 'MUNDRA', 'KARACHI', 'NHAVA SHEVA', 'COLOMBO', 'PORT KLANG', 'HONG KONG', 'SHANGHAI', 'NINGBO', 'SHEKOU'].map((name) => ({ name }))

const call = (value: string): ScheduleCall => {
  const [eta = '-', etd = '-'] = value.split(' / ')
  return { eta, etd }
}

const row = (vessel: string, voyage: string, values: string[]): ScheduleRow => ({
  vessel,
  voyage,
  calls: values.map(call),
})

// Add future ports to `ports`, then add one matching call value to every row.
// Add future vessels by creating another row with the same number of calls.
export const cwsSchedule: ScheduleVariant = {
  title: 'QAMARIS SHIPPING LINES',
  subtitle: 'Sailing Schedule - CWS',
  ports,
  rows: [
    row('X-PRESS PYXIS', '26005W', ['14 Oct / 16 Oct','17 Oct / 18 Oct','20 Oct / 21 Oct','24 Oct / 25 Oct','25 Oct / 26 Oct','04 Nov / 05 Nov','06 Nov / 08 Nov','08 Nov / 08 Nov','08 Nov / 10 Nov','- / -','14 Nov / 15 Nov','18 Nov / 19 Nov','24 Nov / 25 Nov','27 Nov / 28 Nov','29 Nov / 30 Nov','02 Dec / 03 Dec']),
    row('FEI HONG DA 86', '2607W', ['19 Oct / 20 Oct','20 Oct / 21 Oct','23 Oct / 24 Oct','28 Oct / 29 Oct','30 Oct / 31 Oct','06 Nov / 07 Nov','08 Nov / 09 Nov','09 Nov / 09 Nov','10 Nov / 11 Nov','- / -','16 Nov / 17 Nov','20 Nov / 21 Nov','26 Nov / 27 Nov','29 Nov / 30 Nov','30 Nov / 01 Dec','03 Dec / 04 Dec']),
    row('ONE MOTIVATOR', '0086W', ['01 Nov / 03 Nov','04 Nov / 05 Nov','07 Nov / 08 Nov','12 Nov / 12 Nov','13 Nov / 14 Nov','20 Nov / 21 Nov','- / -','23 Nov / 24 Nov','25 Nov / 26 Nov','- / -','30 Nov / 01 Dec','05 Dec / 06 Dec','10 Dec / 11 Dec','13 Dec / 14 Dec','15 Dec / 16 Dec','18 Dec / 19 Dec']),
    row('X-PRESS CAPELLA', '26006W', ['08 Nov / 10 Nov','11 Nov / 12 Nov','14 Nov / 15 Nov','19 Nov / 19 Nov','20 Nov / 21 Nov','27 Nov / 28 Nov','- / -','30 Nov / 01 Dec','02 Dec / 03 Dec','- / -','07 Dec / 08 Dec','12 Dec / 13 Dec','18 Dec / 19 Dec','20 Dec / 21 Dec','22 Dec / 23 Dec','25 Dec / 26 Dec']),
    row('KMTC MOMBASA', '2607W', ['15 Nov / 17 Nov','18 Nov / 19 Nov','21 Nov / 22 Nov','26 Nov / 26 Nov','27 Nov / 28 Nov','04 Dec / 05 Dec','- / -','08 Dec / 08 Dec','09 Dec / 10 Dec','- / -','14 Dec / 15 Dec','19 Dec / 20 Dec','24 Dec / 25 Dec','27 Dec / 28 Dec','29 Dec / 30 Dec','01 Jan / 02 Jan']),
    row('EVER LIFTING', '067W', ['22 Nov / 24 Nov','25 Nov / 26 Nov','28 Nov / 29 Nov','03 Dec / 03 Dec','04 Dec / 05 Dec','11 Dec / 12 Dec','16 Dec / 19 Dec','14 Dec / 15 Dec','16 Dec / 17 Dec','23 Dec / 25 Dec','29 Dec / 30 Dec','05 Jan / 06 Jan','12 Jan / 13 Jan','15 Jan / 16 Jan','18 Jan / 19 Jan','20 Jan / 21 Jan']),
    row('QAMARIS PROGRESS', 'QP01W', ['30 Nov / 03 Dec','03 Dec / 04 Dec','03 Dec / 04 Dec','- / -','14 Dec / 14 Dec','24 Dec / 26 Dec','31 Dec / 03 Jan','- / -','10 Mar / 12 Mar','- / -','16 Mar / 17 Mar','22 Mar / 23 Mar','02 Apr / 03 Apr','06 Apr / 04 Apr','06 Apr / 04 Apr','- / -']),
    row('X-PRESS PYXIS', '26006W', ['02 Dec / 04 Dec','05 Dec / 06 Dec','08 Dec / 09 Dec','12 Dec / 13 Dec','13 Dec / 14 Dec','23 Dec / 24 Dec','- / -','25 Dec / 27 Dec','27 Dec / 29 Dec','- / -','02 Jan / 03 Jan','06 Jan / 07 Jan','12 Jan / 13 Jan','15 Jan / 16 Jan','17 Jan / 18 Jan','20 Jan / 21 Jan']),
    row('FEI HONG DA 86', '2608W', ['07 Dec / 08 Dec','08 Dec / 09 Dec','11 Dec / 12 Dec','16 Dec / 17 Dec','18 Dec / 19 Dec','25 Dec / 26 Dec','- / -','27 Dec / 28 Dec','29 Dec / 30 Dec','- / -','04 Jan / 05 Jan','08 Jan / 09 Jan','14 Jan / 15 Jan','17 Jan / 18 Jan','18 Jan / 19 Jan','21 Jan / 22 Jan']),
    row('ONE MOTIVATOR', '0087W', ['20 Dec / 22 Dec','23 Dec / 24 Dec','26 Dec / 27 Dec','31 Dec / 31 Dec','01 Jan / 02 Jan','08 Jan / 09 Jan','- / -','11 Jan / 12 Jan','13 Jan / 14 Jan','- / -','18 Jan / 19 Jan','23 Jan / 24 Jan','28 Jan / 29 Jan','31 Jan / 01 Feb','02 Feb / 03 Feb','05 Feb / 06 Feb']),
    row('X-PRESS CAPELLA', '26007W', ['27 Dec / 29 Dec','30 Dec / 31 Dec','02 Jan / 03 Jan','07 Jan / 07 Jan','08 Jan / 09 Jan','15 Jan / 16 Jan','- / -','18 Jan / 19 Jan','20 Jan / 21 Jan','- / -','25 Jan / 26 Jan','30 Jan / 31 Jan','04 Feb / 04 Feb','07 Feb / 08 Feb','09 Feb / 10 Feb','12 Feb / 13 Feb']),
    row('KMTC MOMBASA', '2608W', ['03 Jan / 05 Jan','06 Jan / 07 Jan','09 Jan / 10 Jan','14 Jan / 14 Jan','15 Jan / 16 Jan','22 Jan / 23 Jan','- / -','25 Jan / 26 Jan','27 Jan / 28 Jan','- / -','01 Feb / 02 Feb','07 Feb / 08 Feb','11 Feb / 12 Feb','14 Feb / 15 Feb','16 Feb / 17 Feb','19 Feb / 20 Feb']),
    row('EVER LIFTING', '068W', ['10 Jan / 12 Jan','13 Jan / 14 Jan','16 Jan / 17 Jan','21 Jan / 21 Jan','22 Jan / 23 Jan','29 Jan / 30 Jan','- / -','01 Feb / 02 Feb','03 Feb / 04 Feb','- / -','08 Feb / 09 Feb','13 Feb / 14 Feb','18 Feb / 19 Feb','21 Feb / 22 Feb','23 Feb / 24 Feb','26 Feb / 27 Feb']),
    row('QAMARIS WAVE', 'QW02W', ['15 Jan / 18 Jan','19 Jan / 19 Jan','- / -','- / -','30 Jan / 30 Jan','09 Feb / 11 Feb','16 Feb / 19 Feb','- / -','23 Feb / 25 Feb','- / -','01 Mar / 02 Mar','07 Mar / 08 Mar','18 Mar / 19 Mar','22 Mar / 20 Mar','22 Mar / 20 Mar','- / -']),
    row('QAMARIS PROGRESS', 'QP02W', ['30 Jan / 02 Feb','03 Feb / 03 Feb','- / -','- / -','14 Feb / 14 Feb','24 Feb / 26 Feb','03 Mar / 06 Mar','- / -','10 Mar / 12 Mar','- / -','16 Mar / 17 Mar','22 Mar / 23 Mar','02 Apr / 03 Apr','06 Apr / 04 Apr','06 Apr / 04 Apr','- / -']),
  ],
}

const cigPorts = ['SHANGHAI', 'NINGBO', 'SHEKOU', 'SINGAPORE', 'PORT KLANG', 'NHAVA SHEVA', 'KHOR FAKKAN', 'KARACHI', 'NHAVA SHEVA', 'COLOMBO', 'PORT KLANG', 'SHANGHAI', 'NINGBO', 'SHEKOU'].map((name) => ({ name }))

export const cigSchedule: ScheduleVariant = {
  title: 'QAMARIS SHIPPING LINES LLC',
  subtitle: 'Sailing Schedule - CIG',
  ports: cigPorts,
  rows: [
    row('QAMARIS WAVE', 'QW01W', ['15 Nov / 18 Nov','18 Nov / 19 Nov','- / -','- / -','29 Nov / 29 Nov','09 Dec / 11 Dec','16 Dec / 19 Dec','- / -','23 Dec / 25 Dec','29 Dec / 30 Dec','05 Jan / 05 Jan','15 Jan / 16 Jan','19 Jan / 17 Jan','- / -']),
    row('QAMARIS PROGRESS', 'QP01W', ['30 Nov / 03 Dec','03 Dec / 04 Dec','- / -','- / -','14 Dec / 14 Dec','24 Dec / 26 Dec','31 Dec / 03 Jan','- / -','07 Jan / 09 Jan','13 Jan / 14 Jan','20 Jan / 20 Jan','30 Jan / 31 Jan','03 Feb / 01 Feb','- / -']),
    row('QAMARIS WAVE', 'QW02W', ['15 Jan / 18 Jan','19 Jan / 19 Jan','- / -','- / -','30 Jan / 30 Jan','09 Feb / 11 Feb','16 Feb / 19 Feb','- / -','23 Feb / 25 Feb','01 Mar / 02 Mar','07 Mar / 08 Mar','18 Mar / 19 Mar','22 Mar / 20 Mar','- / -']),
    row('QAMARIS PROGRESS', 'QP02W', ['30 Jan / 02 Feb','03 Feb / 03 Feb','- / -','- / -','14 Feb / 14 Feb','24 Feb / 26 Feb','03 Mar / 06 Mar','- / -','10 Mar / 12 Mar','16 Mar / 17 Mar','22 Mar / 23 Mar','02 Apr / 03 Apr','06 Apr / 04 Apr','- / -']),
  ],
}

const cloneSchedule = (schedule: ScheduleVariant, title: string, subtitle: string): ScheduleVariant => ({
  title,
  subtitle,
  ports: schedule.ports.map((port) => ({ ...port })),
  rows: schedule.rows.map((item) => ({ ...item, calls: item.calls.map((entry) => ({ ...entry })) })),
})

export const sailingSchedule = cloneSchedule(cwsSchedule, 'QAMARIS SHIPPING LINES', 'Sailing Schedule')
export const sailingScheduleTwo = cloneSchedule(cwsSchedule, 'QAMARIS SHIPPING LINES', 'Sailing Schedule')

export const scheduleVariants = [cwsSchedule, cigSchedule, sailingSchedule, sailingScheduleTwo]
